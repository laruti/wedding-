import React from 'react'
import img from '../assets/ktemjrouk.jpg'
import heart from '../assets/heart.png'
const ship = () => {
  return (
    <div className=''>
      <div className='text-center ml-8 mr-8 '>
        <h1 className='mt-4 text-pink-500 font-moulpali'>សិរីសួស្តីមង្គលអាពាហ៍ពិពាហ៍</h1>
        <h2 className='mt-4'>យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ</h2>
        <p className='mt-7'>ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា និងប្រិយមិត្ត អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធិពរជ័យ សិរីសួស្តីជ័យមង្គល ក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍ របស់យើងខ្ញុំទាំងពីរ។</p>
      </div>

      <div className='flex flex-col items-center mt-4'>
        <div className='flex items-center gap-2'>
          <h1>name male </h1>
          <img src={img} width={144} height={144} className=' rounded-full' />
        </div>
        <div><img src={heart} alt="" width={70} className='animate-bounce' /></div>
        <div className='flex items-center gap-2'>
          <img src={img} width={144} height={144} className=' rounded-full' />
          <h1>name male </h1>
        </div>
      </div>

      <p className='text-center  ml-8 mr-8'>និង ពិសាភោជនាហារ ដែលនឹងប្រព្រឹត្ត ទៅនៅ
        ថ្ងៃទី១៨ ខែមេសា ឆ្នាំ២០២៤

        ត្រូវនឹងថ្ងៃព្រហស្បតិ៍ ១០ កើត ខែចេត្រ ឆ្នាំរោង ឆស័ក ពុទ្ធសករាជ ២៥៦៧ វេលាម៉ោង ០៥:០០ នាទីល្ងាច នៅគេហដ្ឋានខាងស្រីស្ថិតនៅភូមិព្រែកអំពិល សង្កាត់ព្រែកអំពិល ក្រុងអរិយក្សត្រ ខេត្តកណ្ដាល ដោយមេត្រីភាព។ សូមអរគុណ!</p>



        {/* photos */}
    </div>
  )
}

export default ship
