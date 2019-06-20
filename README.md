# :ledger: Cliente Subsistema de Presupuesto
 En este repositorio se define la tecnología que se renderizara del lado del cliente para el subsistema de Presupuesto del Sistema Financiero KRONOS.
Como componentes básicos cuenta con:
 * **Plantilla ngxAdmin** ~ [link_documentación](https://github.com/akveo/ngx-admin)
 * **Angular 6.0**
 * **Bootstrap 4**
 * **Nebular**

<summary><h2> :writing_hand: Mockups</h2></summary>
  Los siguientes mockups grafican la estructura general de la aplicación, como sus principales vistas.
  Vista General: 

<summary><h2> 🛠️ Configuracion del proyecto</h2></summary>

  - Clonar el proyecto del repositorio de git
  - Si es la primera vez que se corre el contenedor se debe construir el mismo con 
  ```shell 
      docker-compose up --build
  ```
  - Si por el contrario , ya se ha construido el contenedor y se quiere levantar el mismo se ejecuta  
  ```shell 
      docker-compose up
  ```

<summary><h2> :pick: Dependencias Utilizadas</h2></summary>

  - **Nebular:** (https://github.com/akveo/nebular)
  - **Angular 6**
  - **Bootstrap 4** 

  ### API MID
  - Plan Cuentas MID . [Repositorio](https://github.com/udistrital/plan_cuentas_mid/)
  
  ### API CRUD
  
   - Plan Cuentas CRUD . [Repositorio](https://github.com/udistrital/plan_cuentas_crud)
   - Plan Cuentas MONGO CRUD . [Repositorio](https://github.com/udistrital/plan_cuentas_mongo_crud)
 
  ### Herramientas usadas
  - **ngx-admin:** este [template](https://github.com/akveo/ngx-admin) es el que utiliza ngxGenerator, esta basado en Angular 7+, Bootstrap 4 y Nebular.
