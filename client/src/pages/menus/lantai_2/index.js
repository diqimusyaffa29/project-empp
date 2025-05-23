import React from 'react'
import RowColumn from '@/components/row'
import IconButtonLink from '@/components/iconButton'
import Link from 'next/link'

const LantaiDua = () => {
    const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';
    return (
        <div className='container'>
            <RowColumn imgH1={100} imgH2={100} imgW1={100} imgW2={100} colAlt1={`Intensive Care Unit (ICU)`} colAlt2={`Instalasi Bedah Sentral (IBS)`} floor={`Lantai 2`} labelCol1={`Intensive Care Unit (ICU)`} labelCol2={`Instalasi Bedah Sental (IBS)`} imgCol1={`${prefix}/assets/icu.avif`} imgCol2={`${prefix}/assets/ibs.png`} urlCol1={`https://docs.google.com/spreadsheets/d/1wN8dksu0FdiWAMSebBEz4SUUrc6DyMtjxK3Kl78_aYU/`} urlCol2={`https://docs.google.com/spreadsheets/d/11Taj3Hk4MTNTTOLCcZYqCmG5zlXiK0eI/`} />
            <IconButtonLink marginTop={0} marginBottom={50} imgSrc={`${prefix}/assets/hd.jpeg`} alt={`Instalasi Dialisis`} label={`Instalasi Dialisis`} url={`https://docs.google.com/spreadsheets/d/1YoI3Pu0lLarbOagGVHom0j5BnHv-w_9a/edit?usp=sharing&ouid=114174739585821834097&rtpof=true&sd=true`} imgHeight={100} imgWidth={100} fontWeight={`fs-xl-4 fw-normal`} />
            <Link href={`/`} >
                <button className="btn btn-primary" type="submit" style={{ float: 'right' }}>Back to Home</button>
            </Link>
        </div>
    )
}

export default LantaiDua
