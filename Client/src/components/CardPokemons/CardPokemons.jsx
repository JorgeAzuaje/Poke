import React from "react";
import { useModal } from "../Modal/useModal"
import Modal from "../Modal/Modal";

export default function CardPokemons (props){
  
    // const openDetail=()=>{
    //     openAlert()
    // }
    return(
        <div className="Card bg-zinc-200 cursor-pointer h-98 mb-6 mr-6 ml-6 sm:ml-auto sm:mr-auto md:mr-auto md:ml-auto " >
                    {/* <Modal isOpen={isOpenAlert} onClose={closeAlert}>
                        <h4>Informacion de la Pocion</h4>
                    </Modal> */}
            <div className="max-w-98 max-h-98 bg-secondary flex flex-col items-center justify-center m-8">
                <div>
                    <img src={props.dataPokemons.imagen.secure_url} alt="img_not_fund" className="h-40"/>
                </div>
                <div className='p-4'>
                    <span className="flex text-lg font-semibold text-center">{props.dataPokemons.nombre}</span>
                </div>

                <div className='w-full h-full flex items-center justify-center rounded-b-lg'>
                    <div className='flex flex-col w-1/2 gap-2'>
                        <span>Habilidad: {props.dataPokemons.habilidad}</span>
                        <span>Generación: {props.dataPokemons.generacion}</span> {/* Disponible */}
                    </div>
                    <div className='flex flex-col items-center justify-center space-y-4'>
                        <button className='w-full rounded-lg shadow-lg bg-green-400 p-1 text-sm font-medium' onClick={(e)=>props.openDetail(e, props.dataPokemons)}>Ver Detalles</button>
                    </div>
                </div>
            

                
            </div>
    </div>
    )
}