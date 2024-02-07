import React from 'react';
import style from '../../Styles/CustomerSayings/CustomerSayings.module.css'

const CustomerSayings = () => {
  return (
    <div>
        <div className={style.CusSayMain}>
            <div className={style.headerCont}>
                <img src="" alt="" />
                <p className={style.headerContText}  >What our customer says</p>
            </div>
            {/* -- */}
            <div className={style.bodyCon} >
                <img src="https://s3-alpha-sig.figma.com/img/b291/9905/8548b647df2b63bcb79dac8d3452d3fe?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hk2Ex78kvC7m20x9vo~sL5klcRnKhqaLEIbOGEKn~iy1JdzHJgkkyOFjqq4ats3io3qPNx2zvS9sa6Zpe3aY2DeXNrtCsOoI4QVUTqx3Fu59-L51a9KGDB28npI-C5e66NjFObvacuSv6r8XGb0MuQPlG9nFPHogwHuLZHhF5ol6Vwkh8ENzZ6uCPYLKyx4OdFFTpvudkIO4wzzsNxNMQPsIeR5jrUnkBFsGmBrUSnmCfiB3TXfxjQsWCMWekfLNWbAop-jrPp7CHGC-1aObUkJ6T-CXsslzKKk9kueD4c4z35-HrX4g6O~HhVDNFvDYAgjc522f7tRRpW8QYqZd5w__" alt="" />
                <div>
                    <p className={style.bname}>SUNIL GUPTA</p>
                    <p className={style.bprof} >Chartered accountant</p>
                    <p className={style.bdet}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in odio vitae justo vestibulum bibendum ac in sem. Sed varius tellus et purus iaculis, id varius odio rhoncus. Vestibulum vestibulum lacinia tortL orem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in odio vitae justo vestibulum bibendum ac in sem. Sed varius tellus et purus iaculis, id varius odio rhoncus. Vestibulum vestibulum lacinia tortor, et convallis libero vehicula ut. or, et convallis libero vehicula ut. </p>
                </div>
            </div>
        </div>      
    </div>
  )
}

export default CustomerSayings
