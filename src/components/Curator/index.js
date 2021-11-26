import React from 'react';
import './style.scss';
import curatorPhoto from '../../images/thomas-aguiar.JPG'

const Curator = () => {
    return (
        <div className="curator__container">
            <div className="curator__photo">
                <img src={curatorPhoto} alt="Foto do curador Thomas Aguiar" />
            </div>
            <div className="curator__details">
                <div>
                    <h3>Thomas Aguiar Vicente</h3>
                    <h6>Curadoria</h6>
                </div>
                <p>
                    Desenvolvedor Web Front-end Jr, graduando em Ciência da Computação na Universidade Anhembi Morumbi.
                </p>
            </div>
        </div>
    )
}

export default Curator;
