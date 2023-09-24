import React, { useContext } from 'react';
import { MyContext } from '../src/App';
import CComp from './CComp';
function Comp1() {
const theme = useContext(MyContext);
return (
    <>
<div className={theme}>
This is Component
<h1>1</h1>
<CComp/> {/* child component */}
</div>
</>
);
}
export default Comp1;
