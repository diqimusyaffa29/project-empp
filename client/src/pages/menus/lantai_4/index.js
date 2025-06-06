import React from 'react'
import RowColumn from '@/components/row'
import Link from 'next/link'

const LantaiEmpat = () => {
    const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';
    return (
        <div className='container'>
            <RowColumn imgH1={100} imgH2={100} imgW1={100} imgW2={100} colAlt1={`Rawat Inap Naim`} colAlt2={`Rawat Inap Adn`} floor={`Lantai 4`} labelCol1={`Rawat Inap Naim`} labelCol2={`Rawat Inap Adn`} imgCol1={`${prefix}/assets/rwi.jpg`} imgCol2={`${prefix}/assets/rwi.jpg`} urlCol1={`https://docs.google.com/spreadsheets/d/1Ul44GHlAOhpOdjQMNJYRt0A28vd1CR_M`} urlCol2={`https://docs.google.com/spreadsheets/d/1yrsNY1ohTeZquLsaVaJ3US7iIEUm7oTZ/`} />
            <Link href={`/`} >
                <button className="btn btn-primary" type="submit" style={{ float: 'right' }}>Back to Home</button>
            </Link>
        </div>
    )
}

export default LantaiEmpat
