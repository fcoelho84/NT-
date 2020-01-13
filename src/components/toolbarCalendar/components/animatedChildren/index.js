import React from 'react'




import { 
    AnimatedChildren,
} from '../../styles'


export const AnimatedChildrenHelper = props => {


    return (
        <AnimatedChildren
            style={ 
                { 
                    transform: [ 
                        { 
                            translateY: props.animatedValue.interpolate( 
                                { 
                                    inputRange: [0, 0.5, 1], 
                                    outputRange: [-375, -287, 10]  
                                } 
                            ) 
                        },
                        
                    ] 
                } 
            } 
        >


            { props.children }


        </AnimatedChildren>
    )
}