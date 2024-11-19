import React from 'react';
import './App.css';
import img from './assets/ktemjrouk.jpg';
import heart from './assets/heart.png';
import { Carousel } from 'antd';
import ban from './assets/banner.png'
import ban2 from './assets/ban2.jpg'
import ban3 from './assets/time.jpg'
import pr1 from './assets/pr1.jpg'
import pr2 from './assets/pr2.jpg'
import pr4 from './assets/pr4.jpeg'
import qr from './assets/qr_qrcode.png'
import pr5 from './assets/pr5.jpg'
import pr6 from './assets/pr6.jpg'
import pr7 from './assets/pr7.jpg'
import { Image } from 'antd';
import famale from './assets/famale2.jpg'
import male from './assets/male.jpg'




const App = () => {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const data = [
    {
      nameM: "ហ៊ួយ តាំងស៊ាលី",
      nameF: "ហេង ស្រីនេ",
      date: {
        day: "៥",
        month: "មករា",
        year: "២០២៥",
      },
    },
  ];

  const couple = data[0]; // Accessing the first element

  return (
    <div className='md:px-48'>
      {/* navbar */}


      <Carousel autoplay>
        <div>
          <img src={ban} alt="" />
        </div>

        <div>
          <img src={ban2} alt="" />
        </div>
      </Carousel>
      <div className='led pt-4 pb-4'>
        <div className='text-center ml-4 mr-4'>
          <h1 className=' text-pink-500 khmer-regular'>សិរីសួស្តីមង្គលអាពាហ៍ពិពាហ៍</h1>
          <p className='mt-4  text-black'>យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ</p>
          <p className='mt-4'>
            ឯកឧត្តម លោកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា និងប្រិយមិត្ត
            អញ្ជើញចូលរួមជាអធិបតី និងជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធិពរជ័យ
            សិរីសួស្តីជ័យមង្គល ក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍ របស់យើងខ្ញុំទាំងពីរ។
          </p>
        </div>

        <div className='flex flex-col items-center mt-8 '>
          <div className='flex items-center gap-2 '>
            <h1>{couple.nameM}</h1>
            <img src={male} className='rounded-[70px] w-[140px] h-[140px] object-cover p-2' alt="Female" />
          </div>
          <div>
            <img src={heart} alt="Heart" width={60} className='animate-bounce m-4' />
          </div>
          <div className='flex items-center gap-2 mt-4'>
            <img src={famale} className='rounded-full w-[140px] h-[140px] object-cover p-2 ' alt="Female" />
            <h1>{couple.nameF}</h1>
          </div>
        </div>

        <p className='text-center ml-4 mr-4 '>
          និង ពិសាភោជនាហារ ដែលនឹងប្រព្រឹត្ត ទៅនៅ<br />
          ថ្ងៃទី<span>{couple.date.day}</span> ខែ{couple.date.month} ឆ្នាំ{couple.date.year} <br />
          ត្រូវនឹងថ្ងៃព្រហស្បតិ៍ ១០ កើត ខែចេត្រ ឆ្នាំរោង
          ឆស័ក ពុទ្ធសករាជ ២៥៦៧ វេលាម៉ោង ០៥:០០ នាទីល្ងាច
          នៅគេហដ្ឋានខាងស្រីស្ថិតនៅភូមិអូរឬស្សី២
          សង្កាត់អូរឬស្សី ក្រុងក្រចេះ ខេត្តក្រចេះ
          ដោយមេត្រីភាព។ សូមអរគុណ!
        </p>
      </div>


      {/* Photos */}
      <div className='mt-4'>
        <div className='text-center'>
          <h1 className='text-pink-500'>កម្រងរូបភាពអនុស្សាវរីយ៍</h1>
          <p>រូបភាពសម្រាប់រំលឹក និងជាចំណងអាពាហ៍ពិពាហ៍ដ៏រឹងមាំ ហើយមានសុភមង្គល សម្រាប់យើងទាំងពីរនាក់។</p>
          <div class="grid grid-cols-3 gap-1  m-4">
            <Image.PreviewGroup>
              <div class="col-span-1   rounded-xl "><Image src={pr4} alt="" className='rounded-xl ' /></div>
              <div class="col-span-2  rounded-xl"><Image src={pr7} alt="" className='rounded-xl' /></div>

              <div class="col-span-1   rounded-xl"><Image src={pr2} alt="" className='rounded-xl' /></div>
              <div class="col-span-1  rounded-xl"><Image src={pr1} alt="" className='rounded-xl' /></div>
              <div class="col-span-1   rounded-xl"><Image src={pr6} alt="" className='rounded-xl' /></div>

              <div class="col-span-1  rounded-xl"><Image src={pr5} alt="" className='rounded-xl' /></div>
              <div class="col-span-2   rounded-xl"><Image src={pr1} alt="" className='rounded-xl' /> </div>
            </Image.PreviewGroup>
          </div>
        </div>
      </div>
      {/* Location */}
      <div>
        <h1>ទីតាំងកម្មវិធី</h1>
        <p>នៅគេហដ្ឋានខាងស្រីស្ថិតនៅភូមិអូរឬស្សី២ សង្កាត់អូរឬស្សី ក្រុងក្រចេះ ខេត្តក្រចេះ</p>
      </div>
      <div className='gap-4 items-center border-2 m-4 rounded-md'>
        <iframe
          title="Google Map"
          width="100%"
          height="200"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&height=200&hl=en&q=12%C2%B029'55.0%22N%20106%C2%B002'36.4%22E+(My%20Business%20Name)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
        >
          <a href="https://www.gps.ie/">gps trackers</a>
        </iframe>
      </div>

      <div className='flex flex-row gap-4 items-center border-2 m-4 rounded-md p-4'>
        <a href="https://pay.ababank.com/zeKRSJfFRv5T997p9">
          <div className='ml-2'>
            <img src={qr} alt="" width={100} />
          </div>
        </a>
        <div>
          <h1 className='text-pink-500'>HENG DOLLAR</h1>
          <div className='ml-8 font-bold'>978818522</div>
        </div>
      </div >
      <div className='text-center text-gray-400 font-light border-t-2 border-gray-200 mt-4'>
        <div > © 2024-01-13. All Rights Reserved.</div>
        <div>Developed by dollar for: wedding invitation</div>
      </div>
    </div>
  );
};

export default App;