<template>
  <div class="container table-content">
    <vue-good-table
      :columns="columns"
      :rows="users"
      :paginate="true"
      :global-search="true"
      global-search-placeholder="Pesquisar"
      style-class="user-table"
      next-text="Próximo"
      prev-text="Anterior"
      rows-per-page-text="Ítens por página"
      of-text="de"
    />
  </div>
</template>

<script>
import axiosService from '@/services'
export default {
  name: 'Table',
  data () {
    return {
      users: [],
      columns: [
        {
          label: 'Id',
          field: 'id'
        },
        {
          label: 'Nome',
          field: 'full_name',
          filterable: true
        },
        {
          label: 'Email',
          field: 'email',
          filterable: true
        },
        {
          label: 'Sexo',
          field: 'gender',
          filterable: true
        },
        {
          label: 'IP',
          field: 'ip_address'
        }
      ]
    }
  },
  mounted () {
    if (localStorage.getItem('users')) {
      this.users = JSON.parse(localStorage.getItem('users'))
    } else {
      this.getData()
    }
  },
  methods: {
    getData () {
      axiosService.getUsers()
        .then(response => {
          let jsonData = []
          let data = JSON.parse(JSON.stringify(response.data))
          data.forEach((element, i) => {
            element.full_name = `${element.first_name} ${element.last_name}`
            jsonData.push(element)
            localStorage.setItem('users', JSON.stringify(jsonData))
            this.users = JSON.parse(localStorage.getItem('users'))
          })
        })
        .catch(error => {
          throw error
        })
    }
  }
}
</script>

<style lang="scss">
  .table-content {
    h2 {
      color: #4c84cc;
    }
  }
  .user-table {
    width: 100%;
    thead {
      tr {
        &:first-child {
          td {
            padding-bottom: 20px;
          }
        }
      }
      th {
        border-bottom: solid 2px lightgrey;
        color: #ff500f;
        padding: 5px;
      }
    }
    tbody {
      td {
        border-top: solid 1px lightgrey;
      }
    }
  }
</style>
