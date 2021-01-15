import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking, FaShuttleVan, FaSmokingBan} from 'react-icons/fa'


export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail />,
                title:"Free cocktails",
                info:" Lorem ipsum dolor sit amet consectetur adipisicing."
            },
            {
                icon:<FaHiking />,
                title:"Enjoy hiking",
                info:" Lorem ipsum dolor sit amet consectetur adipisicing."
            },
            {
                icon:<FaShuttleVan />,
                title:"Free shuttle",
                info:" Lorem ipsum dolor sit amet consectetur adipisicing."
            },
            {
                icon:<FaSmokingBan/>,
                title:"No Smoking!",
                info:" Lorem ipsum dolor sit amet consectetur adipisicing."
            }
        ]
    }
    render() {
        return (
            <section  className="services">
                <Title title="services" />
                <div className="services-center" >
                    {this.state.services.map((item, index)=> {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <p>{item.info}</p>

                            </article>
                        )

                    })}

                </div>
            </section>
        )
    }
}
