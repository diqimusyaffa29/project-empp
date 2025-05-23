import Link from 'next/link'
import React from 'react'
import IconButtonLink from '@/components/iconButton'

const SaranaPage = () => {
    const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';
    return (
        <div className='container' style={{marginTop: 100}}>
            <IconButtonLink imgSrc={`${prefix}/assets/rusak.webp`} alt={`Kerusakan Fasilitas`} label={`Kerusakan Fasilitas`} url={`https://docs.google.com/forms/d/e/1FAIpQLSfJ84FEL9bS1vsJ5kzDplrLpTSAm7bRkd4vAmvo2iMPiMiv8A/viewform`} imgHeight={100} imgWidth={100} fontWeight={`fs-xl-4`}/>
            <Link href={`/`} >
                <button className="btn btn-primary" type="submit" style={{ float: 'right' }}>Back to Home</button>
            </Link>
        </div>
    )
}

export default SaranaPage
