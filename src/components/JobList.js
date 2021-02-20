import React from 'react'
import { CardItem } from './CardItem'

export const JobList = () => {
    return (
        <div className="joblist">
                     <CardItem
                    src={'/Apple-logo.png'}
                    name="Apple"
                    text="Data Engineer"
                    timestamp="1 minute ago" 
                    category="Data"
                    tag1="Oracle"
                    tag2="Hive"
                    tag3="yarn"/>
                    <CardItem
                    src={'/Binance-logo.png'}
                    name="Binance"
                    text="Backend Service Developer"
                    timestamp="2 minutes ago" 
                    category="Backend"
                    tag1="Spring"
                    tag2="Java"
                    tag3="trading"/>
                    <CardItem
                    src={'/Goldman-logo.png'}
                    name="Goldman Sachs"
                    text="Full Stack Developer (Data Modelling)"
                    timestamp="3 minutes ago" 
                    category="Full Stack"
                    tag1="Analytics"
                    tag2="UOB"
                    tag3="ORM"/>
        </div>
    )
}
