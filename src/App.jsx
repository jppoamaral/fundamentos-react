import "./App.css";
import React from "react";

import Card from "./components/layout/Card";

import Mega from "./components/mega/Mega";
import Counter from "./components/counter/Counter";
import Input from "./components/form/Input";
import IndirectParent from "./components/communication/IndirectParent";
import DirectParent from "./components/communication/DirectParent";
import UserInfo from "./components/conditional/UserInfo";
import EvenOrOdd from "./components/conditional/EvenOrOdd";
import ProductsTable from "./components/looping/ProductsTable";
import StudentList from "./components/looping/StudentsList";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
import Random from './components/basics/Random'
import Fragment from './components/basics/Fragment'
import WithParameter from './components/basics/WithParam'
import First from './components/basics/First'

export default () => (
    <div className="App">
        <h1>React Fundamentals</h1>
        <div className="Cards">
            <Card title="#13 - Mega" color="#FA8072">
                <Mega initialAmt={1}/>
            </Card>
            <Card title="#12 - Counter" color="#778899">
                <Counter initialNum={10}></Counter>
            </Card>
            <Card title="#11 -  Controlled Component" color="#2F4F4F">
                <Input></Input>
            </Card>
            <Card title="#10 - Indirect Communication" color="#DAA520">
                <IndirectParent></IndirectParent>
            </Card>
            <Card title='#09 - Direct Communication' color="#800000">
                <DirectParent></DirectParent>
            </Card>
            <Card title="#08 - Conditional Rendering" color="#00BFFF">
                <EvenOrOdd number={20} />
                <UserInfo user={{ name: 'Joao' }} />
                {/* <UserInfo user={{}} />
                <UserInfo /> */}
            </Card>
            <Card title="#07 - Looping Challenge" color="SeaGreen">
                <ProductsTable />
            </Card>
            <Card title="#06 - Looping" color="#DA70D6">
                <StudentList></StudentList>
            </Card>
            <Card title="#05 - Components with Children" color="#C0C0C0">
                <Family lastName="Amaral">
                    <FamilyMember name="João Pedro" />
                    <FamilyMember name="Guilherme" />
                    <FamilyMember name="Matheus" />
                </Family>
            </Card>
            <Card title="#04 - Random Number Challenge" color="#FF5733">
                <Random min={0} max={100} />
            </Card>
            <Card title="#03 - Fragment" color="#00BFFF">
                <Fragment />
            </Card>
            <Card title="#02 - With Parameters" color="#FF00FF">
                <WithParameter
                    title="Weather in:"
                    country="Germany"
                    city="Berlin"
                    temperature={-3} />
            </Card>
            <Card title="#01 - First Component" color="#00FF00">
                <First></First>
            </Card>
        </div>
    </div>
)