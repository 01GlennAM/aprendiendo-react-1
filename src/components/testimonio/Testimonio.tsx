import imgchicha1 from "../../assets/img/chica1.jpg";
import "./Testimonio.css"



function Testimonio() { // funcion por q son componenetes funcionales
    return (
        <div className="contenedor-principal"> 
        <img className="contenedor-principal-img-1" src={imgchicha1} alt="foto mujer 1"/> 
        

        <div className="contenedor-texto">
            <p className="nombre-testimonio">chicha1</p>
            <p className="nombre-cargo">ingeniera de alimentos</p>
            <p className="texto-persona">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore deserunt quam ipsum praesentium voluptatum, labore suscipit quisquam vel eligendi non minima repellat velit? Cumque optio asperiores assumenda, laborum sapiente error?</p>
            

        </div>
        
        </div> // ese classname es para las clases acá
        // se ponen los dos puntos por q con uno el solo buscaria en la misma carpeta dedonde esta testimonio       
    
    );
}

export default Testimonio; 

