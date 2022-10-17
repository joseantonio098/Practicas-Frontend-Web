<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Categoría</th>
                <th scope="col">Estado</th>
                <th scope="col">Número</th>
                <th scope="col">Acción</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="tarea in tareas" :key="tarea.id">
                
                <th scope="row">{{tarea.id}}</th>
                <td>{{tarea.nombre}}</td>
                <td><!-- Iteramos  "tarea.categoria" -->
                    <span v-for="(cat, index) in tarea.categoria" :key="index">
                        {{
                            (tarea.categoria.length === index + 1) ? cat : cat + ', '
                        }}
                    </span>
                </td>
                <td>{{tarea.estado}}</td>
                <td>{{tarea.numero}}</td>
                <td>
                    <button @click="deleteTareas(tarea.id)" class="btn btn-danger btn-sm">Eliminar</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { mapActions,mapState } from 'vuex';

export default {
    methods: {
        ...mapActions(['deleteTareas']),
    },
    computed: {
        ...mapState(['tareas']),
    },
}
</script>

<style>

</style>