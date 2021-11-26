import React from 'react';
import './style.scss';
import Button from '../Button';
import iconAudio from '../../images/icon-audio-descricao.png';
import iconBanheiro from '../../images/icon-banheiro-acessivel.png';
import iconBraile from '../../images/icon-braile.png';
import iconCao from '../../images/icon-cao-guia.png';
import iconElevador from '../../images/icon-elevador.png';
import iconEstacionamento from '../../images/icon-estacionamento.png';
import iconLibras from '../../images/icon-libras.png';
import iconPiso from '../../images/icon-piso-tatil.png';
import iconPorta from '../../images/icon-porta-larga.png';
import iconRampa from '../../images/icon-rampa.png';

const Card = () => {
    return (
        <div className="card__container">
            <div className="card__image"></div>            
            <div className="card__content">
                <h3>Nome do local</h3>
                <ul className="card__facilities">
                    <li className="card__facilities__item">
                        <img src={iconBraile} title="Sinalização em Braile" alt="Sinalização em Braile"/></li>
                    <li className="card__facilities__item">
                        <img src={iconAudio} title="Audio descrição" alt="Audio descrição"/></li>
                    <li className="card__facilities__item card__facilities__item--unchecked">
                        <img src={iconBanheiro} title="Banheiro acessível" alt="Banheiro acessível"/></li>
                    <li className="card__facilities__item">
                        <img src={iconElevador} title="Elevador para cadeirantes" alt="Elevador para cadeirantes"/></li>
                    <li className="card__facilities__item">
                        <img src={iconEstacionamento} title="Estacionamento para idosos/portadores de deficiência" alt="Estacionamento para idosos/portadores de deficiência"/></li>
                    <li className="card__facilities__item">
                        <img src={iconCao} title="Permite acesso de cães guias" alt="Permite acesso de cães guias"/></li>
                    <li className="card__facilities__item">
                        <img src={iconPiso} title="Piso tátil de alerta" alt="Piso tátil de alerta"/></li>
                    <li className="card__facilities__item">
                        <img src={iconPorta} title="Portas largas" alt="Portas largas"/></li>
                    <li className="card__facilities__item">
                        <img src={iconRampa} title="Rampas de acesso para cadeirantes" alt="Rampas de acesso para cadeirantes"/></li>
                    <li className="card__facilities__item">
                        <img src={iconLibras} title="Atendimento em Libras" alt="Atendimento em Libras"/></li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>  
                <Button>Como chegar</Button>
            </div>                      
        </div>
    )
}

export default Card;
