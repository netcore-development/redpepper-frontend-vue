<template>
    <div class="container">
        <div>
            <b-button v-b-modal.personaModal class="btn-success">Agregar</b-button>

            <b-modal id="personaModal" title="Agregar" size="lg" ok-title="Agregar" cancel-title="Limpiar"
                     ok-variant="btn btn-success" @ok="postPersona">
                <div>
                    <b-form>
                        <b-form-group
                                id="input-group-1"
                                label="Nombres:"
                                label-for="perNombres"

                        >
                            <b-form-input
                                    id="perNombres"
                                    type="text"
                                    required
                                    placeholder="Ingrese los nombres"
                                    v-model="persona.nombres"
                            />

                        </b-form-group>

                        <b-form-group id="input-group-2" label="Apellidos:" label-for="perApellidos">
                            <b-form-input
                                    id="perApellidos"
                                    type="text"
                                    required
                                    placeholder="Ingrese los apellidos"
                                    v-model="persona.apellidos"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-3" label="Dirección:" label-for="perDireccion">
                            <b-form-textarea
                                    id="perDireccion"
                                    type="text"
                                    required
                                    placeholder="Ingrese la dirección"
                                    v-model="persona.direccion"
                            ></b-form-textarea>
                        </b-form-group>
                        <b-form-group id="input-group-4" label="Sexo:" label-for="perSexo">
                            <select
                                    id="perSexo"
                                    required
                                    class="form-control"
                                    v-model="persona.sexo"
                            >
                                <option value="null" hidden selected>-- Seleccione una opcion --</option>
                                <option value="M">
                                    Masculino
                                </option>
                                <option value="F">
                                    Femenino
                                </option>
                            </select>
                        </b-form-group>
                        <b-form-group id="input-group-5" label="Fecha Nacimiento:" label-for="perFechaNac">
                            <b-form-input
                                    id="perFechaNac"
                                    type="date"
                                    required
                                    v-model="persona.fechaNacimiento"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-6" label="DUI:" label-for="perDUI">
                            <b-form-input
                                    id="perDUI"
                                    type="tel"
                                    required
                                    placeholder="Ingrese el DUI"
                                    v-mask="'########-#'"
                                    v-model="persona.dui"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-7" label="NIT:" label-for="perNIT">
                            <b-form-input
                                    id="perNIT"
                                    type="tel"
                                    required
                                    placeholder="Ingrese el NIT"
                                    v-mask="'####-######-###-#'"
                                    v-model="persona.nit"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-8" label="Teléfono:" label-for="perTel">
                            <b-form-input
                                    id="perTel"
                                    type="tel"
                                    required
                                    placeholder="Ingrese el teléfono"
                                    v-mask="'####-####'"
                                    v-model="persona.telefono"


                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-9" label="Correo Electrónico:" label-for="perEmail">
                            <b-form-input
                                    id="perEmail"
                                    type="email"
                                    required
                                    placeholder="Ingrese el correo electrónico"
                                    v-model="persona.correoElectronico"
                            ></b-form-input>
                        </b-form-group>


                    </b-form>

                </div>
            </b-modal>
        </div>
        <!--  Modal Modificar      -->
        <div>

            <b-modal id="personaModificar" title="Actualizar" size="lg" ok-title="Actualizar" cancel-title="Limpiar"
                     ok-variant="btn btn-success" @ok="putPersona">
                <div>
                    <b-form>
                        <b-form-group
                                id="input-group-1"
                                label="Nombres:"
                                label-for="perNombres"

                        >
                            <b-form-input
                                    id="perNombres"
                                    type="text"
                                    required
                                    placeholder="Ingrese los nombres"
                                    v-model="persona.nombres"
                            />

                        </b-form-group>

                        <b-form-group id="input-group-2" label="Apellidos:" label-for="perApellidos">
                            <b-form-input
                                    id="perApellidos"
                                    type="text"
                                    required
                                    placeholder="Ingrese los apellidos"
                                    v-model="persona.apellidos"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-3" label="Dirección:" label-for="perDireccion">
                            <b-form-textarea
                                    id="perDireccion"
                                    type="text"
                                    required
                                    placeholder="Ingrese la dirección"
                                    v-model="persona.direccion"
                            ></b-form-textarea>
                        </b-form-group>
                        <b-form-group id="input-group-4" label="Sexo:" label-for="perSexo">
                            <select
                                    id="perSexo"
                                    required
                                    class="form-control"
                                    v-model="persona.sexo"
                            >
                                <option value="null" hidden selected>-- Seleccione una opcion --</option>
                                <option value="M">
                                    Masculino
                                </option>
                                <option value="F">
                                    Femenino
                                </option>
                            </select>
                        </b-form-group>
                        <b-form-group id="input-group-5" label="Fecha Nacimiento:" label-for="perFechaNac">
                            <b-form-input
                                    id="perFechaNac"
                                    type="date"
                                    required
                                    v-model="persona.fechaNacimiento"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-6" label="DUI:" label-for="perDUI">
                            <b-form-input
                                    id="perDUI"
                                    type="tel"
                                    required
                                    placeholder="Ingrese el DUI"
                                    v-mask="'########-#'"
                                    v-model="persona.dui"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-7" label="NIT:" label-for="perNIT">
                            <b-form-input
                                    id="perNIT"
                                    type="tel"
                                    required
                                    placeholder="Ingrese el NIT"
                                    v-mask="'####-######-###-#'"
                                    v-model="persona.nit"
                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-8" label="Teléfono:" label-for="perTel">
                            <b-form-input
                                    id="perTel"
                                    type="tel"
                                    required
                                    placeholder="Ingrese el teléfono"
                                    v-mask="'####-####'"
                                    v-model="persona.telefono"


                            ></b-form-input>
                        </b-form-group>
                        <b-form-group id="input-group-9" label="Correo Electrónico:" label-for="perEmail">
                            <b-form-input
                                    id="perEmail"
                                    type="email"
                                    required
                                    placeholder="Ingrese el correo electrónico"
                                    v-model="persona.correoElectronico"
                            ></b-form-input>
                        </b-form-group>


                    </b-form>

                </div>
            </b-modal>
        </div>
        <!--Eliminar-->
        <b-modal id="personaEliminar" title="Eliminar" size="lg" ok-title="Eliminar" cancel-title="Cancelar"
                 ok-variant="btn btn-success" @ok="deletePersona()">
            <p>Desea eliminar el registro?</p>
        </b-modal>
        <br>
        <table class="table table-hover table-bordered">
            <thead>
            <tr>
                <th>ID</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Sexo</th>
                <!--                <th>Fecha Nacimiento</th>-->
                <th>DUI</th>
                <th>NIT</th>
                <th>Direccion</th>
                <th>Telefono</th>
                <th>Email</th>
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="persona in personas" :key="persona.id">
                <td>{{persona.id}}</td>
                <td>{{persona.nombres}}</td>
                <td>{{persona.apellidos}}</td>
                <td>{{persona.sexo}}</td>
                <!--                <td>{{persona.fechaNacimiento}}</td>-->
                <td>{{persona.dui}}</td>
                <td>{{persona.nit}}</td>
                <td>{{persona.direccion}}</td>
                <td>{{persona.telefono}}</td>
                <td>{{persona.correoElectronico}}</td>
                <td>
                    <button v-b-modal.personaModificar class="btn btn-info" @click="llenarModal(persona)">Modificar
                    </button>

                    <button v-b-modal.personaEliminar class="btn btn-danger mt-1" @click="llenarModal(persona)">
                        Eliminar
                    </button>
                </td>
            </tr>
            </tbody>
        </table>


    </div>

</template>

<script>
    import axios from 'axios';

    export default {
        mounted() {
            this.getPersonas();
        },
        data() {
            return {
                personas: [],
                persona: {
                    nombres: '',
                    apellidos: '',
                    sexo: null,
                    fechaNacimiento: '',
                    direccion: '',
                    dui: '',
                    nit: '',
                    telefono: '',
                    correoElectronico: ''
                }
            }
        },
        methods: {
            getPersonas() {
                axios.get('http://localhost:5000/api/personas')
                    .then(response => {
                        this.personas = response.data;
                        console.log(response.data);
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            postPersona() {
                axios.post('http://localhost:5000/api/personas', this.persona)
                    .then(response => {
                        console.log(response.data);
                        this.getPersonas();
                    })
                    .catch(error => {
                        console.log(error);
                    })
            },
            putPersona() {
                axios.put('http://localhost:5000/api/personas', this.persona)
                    .then(response => {
                        console.log(response.data);
                        this.getPersonas();
                    })
                    .catch(error => {
                        console.log(error);
                    })
            },
            llenarModal(persona) {
                this.persona.id = persona.id,
                    this.persona.nombres = persona.nombres,
                    this.persona.apellidos = persona.apellidos,
                    this.persona.sexo = persona.sexo,
                    this.persona.direccion = persona.direccion,
                    this.persona.dui = persona.dui,
                    this.persona.nit = persona.nit,
                    this.persona.telefono = persona.telefono,
                    this.persona.correoElectronico = persona.correoElectronico
            },
            deletePersona() {
                axios.delete(`http://localhost:5000/api/personas/${this.persona.id}`)
                    .then(response => {

                        this.getPersonas()
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        }
    }
</script>

<style scoped>

</style>