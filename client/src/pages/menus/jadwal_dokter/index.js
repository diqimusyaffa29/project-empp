import React from 'react'
import RowColumn from '@/components/row'
import Link from 'next/link'

const JadwalDokterPage = () => {
    const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || '';
    return (
        <div className='container' style={{marginTop: 100}}>
            <RowColumn imgH1={100} imgH2={100} imgW1={100} imgW2={100} colAlt1={`Jadwal Dokter Umum da Spesialis`} colAlt2={`Jadwal Dokter Penanggung Jawab Pelayanan`} labelCol1={`Jadwal Dokter Umum dan Spesialis`} labelCol2={`Jadwal Dokter Penanggung Jawab Pelayanan`} imgCol1={`${prefix}/assets/dokter.png`} imgCol2={`${prefix}/assets/dokter.png`} urlCol1={`https://docs.google.com/spreadsheets/d/163T87L8f0SkV3QgCWCGO-ob1UsOLi_OK5zalQcbMdMY/`} urlCol2={`https://drive.google.com/drive/folders/1J6DJ4cf7zAR6ME1wL56gh9KRbkWnd49T?usp=drive_link`} />
            <Link href={`/`} >
                <button className="btn btn-primary" type="submit" style={{ float: 'right' }}>Back to Home</button>
            </Link>
        </div>
    )
}

export default JadwalDokterPage
