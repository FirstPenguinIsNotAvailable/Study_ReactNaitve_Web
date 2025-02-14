import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title.js'

export default class Services extends Component {
    state={
        services : [
            {
                icon: <FaCocktail/>,
                title: "Free Cocktails",
                info: "Lorem ipsum dolor sit amet consecteturadipisicing elit."
            },
            {
                icon: <FaHiking/>,
                title: "Endless Hiking",
                info: "Lorem ipsum dolor sit amet consecteturadipisicing elit."
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free shuttle van",
                info: "Lorem ipsum dolor sit amet consecteturadipisicing elit."
            },
            {
                icon: <FaBeer/>,
                title: "Free beer",
                info: "Lorem ipsum dolor sit amet consecteturadipisicing elit."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title='services'/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={ index } className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })};
                </div>
            </section>
        )
    }
}
