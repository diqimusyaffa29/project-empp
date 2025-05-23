import Link from 'next/link'
import React from 'react'
import IconButtonLink from '@/components/iconButton'

const UrologyCenterPage = () => {
    const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';
    return (
        <div className='container' style={{marginTop: 100}}>
            <IconButtonLink imgSrc={`${prefix}/assets/eswl.png`} alt={`Tindakan Extracorporeal Shock Wave Lithotripsy(ESWL)`} label={`Tindakan Extracorporeal Shock Wave Lithotripsy(ESWL)`} url={`https://docs.google.com/forms/d/e/1FAIpQLSeWmN1Q3rLpWjoE_zq9Pd9cdzVdVn8iNCI-FPvRVFrNdEpWfg/viewform`} imgHeight={100} imgWidth={100} fontWeight={`fs-2`}/>
            <Link href={`/`} >
                <button className="btn btn-primary" type="submit" style={{ float: 'right' }}>Back to Home</button>
            </Link>
        </div>
    )
}

export default UrologyCenterPage
