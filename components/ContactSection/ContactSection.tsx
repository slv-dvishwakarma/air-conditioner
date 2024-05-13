import React from 'react'
import { GridBox } from '../GridBox'
import { ParentContainer } from '../ParentContainer'

export const ContactSection = () => {
    return (
        <ParentContainer>
        <GridBox columns={2} className='py-[50px]'>
            <GridBox.GridItem columnMerge={1}>
                dilip
            </GridBox.GridItem>
            <GridBox.GridItem columnMerge={1}>
                bablu
            </GridBox.GridItem>
        </GridBox>
        </ParentContainer>
    )
}
