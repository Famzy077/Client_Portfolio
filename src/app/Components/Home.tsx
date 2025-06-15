'use client'
import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faDollar } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { faChartSimple, faHeadphones, faEnvelope, faBook, faBookOpenReader, faXmark, faBriefcase, faLink, faLaptop, faCalendar, faGraduationCap, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin, faSquareFacebook, faInstagram, faSquareXTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';
import ExcelLogo from './Images/Excel.png';
import PowerBI from './Images/PowerBi.png';
import MySQL from './Images/MySQL.png';
import Pythonimg from './Images/Python.png';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';
import Estherprofile from './Images/Estherprofile.png'
import SecondProfile from './Images/secondProfile.jpg'
import BeautyStore from './Images/BeautyStore.jpg'
import Funiture from '/public/Funiture.jpg'
import SalesPerformance from './Images/Sales_Performance.png'
import SalesAndProfit from './Images/Sales_And_Profit.png'
import Beauty_Dashboard from './Images/Beauty_Dashboard.png'
import HR_Attrition from './Images/HR_Attrition_Dashboard.png'
import DataClearning from './Images/DataCleaning.png'
import JobImg from './Images/job.png';
import CarInsurance from './Images/CarInsurance.jpg'
import cocaCola from '/public/coca-cola.jpg'

interface HomeProps {
  children: React.ReactNode;
}

const Home: React.FC<HomeProps> = ({ children }) => {
    const [readMore, setReadMove] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    // const [selectedCategory ,setSelectedCategory] = useState('all')
    const handleClick =() =>{
        setIsOpen(false)
    }
    const handleMenu = () => {
        setIsOpen(!isOpen)
    }
    const handleReadMore = () => {
        setReadMove(!readMore)
    }

  return (
    <div>
        <main className=' text-white absolute top-0'>
            <nav   className={`fixed top-0 right-0 w-full h-screen bg-blue-950 opacity-95 z-10 text-white transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul className="flex flex-col items-center justify-center h-full space-y-2">
                    <li><Link onClick={handleClick} className='navText' href='#'>Home</Link></li>
                    <li><Link onClick={handleClick} href='#About'>About</Link></li>
                    <li><Link onClick={handleClick} href='#Project'>Project</Link></li>
                    <li><Link onClick={handleClick} href='#Experience'>Experience</Link></li>
                    <li><Link onClick={handleClick} href='#Contact'>Contact</Link></li>
                </ul>
            </nav>
        </main>
        <header className='header bg-white  mb-16 text-black mx-[12rem] rounded-full mt sticky top-4 z-20'>
            <main className='flex justify-between items-center p-2 md:p-3'>
                <div className='flex logo_box items-center gap-4'>
                    <div className=' md:w-[60px] w-[52px] h-[52px] md:h-[60px] place-items-center place-content-center rounded-full bg-black'>
                        <h1 className='section2 text-white text-2xl md:text-3xl font-semibold cursor-pointercls'>TE</h1>
                    </div>
                    <h2 className='akin text-center text-xl md:text-4xl font-semibold'>Temitope Esther</h2>
                </div>
                <div className='flex p-2 md:p-4 rounded-full  px-3 md:px-7 bg-black gap-3 relative mr-8'>
                    <h1 className='text-white text-xl md:text-2xl font-semibold pr-2 md:pr-4'>Menu</h1>

                    <div onClick={handleMenu} className=' bg-blue-800 w-[2.5rem] md:w-[3.5rem] h-[2.5rem] md:h-[3.5rem] absolute left-[4.2rem] md:left-24 p-[0.6rem] md:p-3 top-[2px] md:top-1 rounded-full cursor-pointer'>
                        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                                {isOpen ? <FontAwesomeIcon icon={faXmark} className="text-white w-[20px] h-[20px] md:w-[30px] md:h-[30px] text-2xl" /> : <FontAwesomeIcon className='text-white w-[20px] h-[20px] md:w-[30px] md:h-[30px] text-2xl' icon={faBars} />}
                        </button>
                    </div>
                </div>
            </main>
        </header>

        <section className='section1 h-[fit-content] p-2 md:p-5 overflow-x-hidden'>
            <div className='nameBox m-20 mb-6 md-10 md:mx-[16rem] rounded-[4rem] p-4 border-4 border-blue-800'>
                <h1 className='nameh1 text-blue-700 font-bold text-6xl flex justify-around'><span className='text-white'>I′m</span>Temitope <span>Esther</span></h1>
            </div>
            <main className='text-center mx-2 my-5 text-xl md:text-2xl text-white'>
                <h1>A data analyst and Data Visualization Analyst</h1>
            </main>
            <div className='mt-3 text-center'>
                <button className='border-2 px-4 border-blue-800 text-blue-800 p-2 rounded-2xl mr-3 hover:text-white hover:bg-blue-800'><Link href='https://docs.google.com/document/d/1st8dBQjf1B3-etQ3O8cSJW2KazoGTUNy/edit?tab=t.0'>Resume</Link></button>
                <button className='bg-blue-800 text-white p-2 rounded-2xl border-2 border-blue-800 hover:bg-transparent px-4 hover:border-blue-800'><Link href='mailto:bisiriyuesthertemitope@gmail.com'>Hire me</Link></button>
            </div>
            <section className='flex gap-0 md:gap-6 justify-center p-1 md:p-4'>
                <div className='mt-10 relative'>
                    <div className='bg-white w-[90px] md:w-[185px] absolute md:top-[11.5rem] top-[7rem] right-[-5.5rem] md:right-[-5.5rem] skillIcon rounded-full p-1 md:p- pr-0 md:pr-5 pl-1 md:pl-3 flex items-center text-black gap-1 md:gap-4 font-semibold'>
                        <Image className='w-[1.2rem] md:w-[3rem]' src={PowerBI} alt="skills-img" />
                        <h1 className='text-xs md:text-xl'>Power BI</h1>
                    </div>
                    <div className='bg-white  w-[95px] md:w-[170px] absolute md:top-[20em] top-[11rem] right-[-7.5rem] md:left-[-1rem] rounded-full p-1 md:p-2 pr-0 md:pr-5 pl-3 flex items-center text-black gap-2 md:gap-4 font-semibold'>
                        <Image src={MySQL} className='w-[1.2rem] md:w-[3rem]' alt='skills-img'/>
                        <h1 className='text-xs md:text-xl'>My SQL</h1>
                    </div>
                </div>
                <div className="imageBox w-[60rem] md:w-[auto] mt-10 flex justify-center">
                    <Image className='w-[300px] md:w-[100%]' src={Estherprofile} alt="profileImage" />
                </div>
                <div className='mt-10 relative'>
                    
                    <div className='bg-white w-[90px] md:w-[170px] absolute top-[7rem] md:top-[11.5rem] left-[-6rem] md:left-[-6rem] rounded-full p-1 md:p-2 pr-0 md:pr-5 pl-3 flex items-center text-black gap-2 md:gap-4 font-semibold'>
                        <Image className='w-[1.2rem] md:w-[2.4rem]' src={ExcelLogo} alt="skills-img" />
                        <h1 className='text-xs md:text-xl'>Excel</h1>
                    </div>
                    <div className='bg-white w-[90px] md:w-[180px] absolute md:top-[20em] top-[11rem] left-[-7.5rem] md:left-[-9rem] skillIcon rounded-full md:p-1 p-1 pr-2 md:pr-5 pl-3 flex items-center text-black gap-2 md:gap-4 font-semibold'>
                        <Image className='rounded-full w-[1.2rem] md:w-[2.4rem]' src={Pythonimg} alt="skills-img" />
                        <h1 className='text-xs md:text-xl'>Python</h1>
                    </div>
                </div>
            </section>
        </section>

        <p id='About'></p>
        <div className='section2 my-9 mx-2 md:mx-16 p-2 md:p-7'>
            <h1 className='text-4xl md:text-7xl font-semibold text-center text-blue-400'>About me</h1>
            <h1 className='text-4xl md:text-7xl font-semibold text-center translate-x-1 md:translate-x-2 translate-y-[-2.4rem] md:translate-y-[-3.9rem]'>About me</h1>

            <main className='md:flex gap-[20px] md:gap-[40px] justify-between'>
                <div className='w-[100%] p-4'>
                    <div className='flex items-center gap-5 mb-10'>
                        <Image className='rounded-full border-4 border-blue-600 w-[4rem] h-[fit-content] object-fill' src={SecondProfile} alt='love-picture'/>
                        <h1 className='text-4xl md:text-6xl text-blue-800 font-extrabold'>I love</h1>
                    </div>
                    <div className='md:flex md:flex-wrap gap-4  items-center'>
                        <div className='flex bg-blue-100 p-2 items-center gap-4 text-2xl md:text-3xl font-semibold px-5 rounded-full text-blue-800  md:mt-0 mb-4'>
                            <FontAwesomeIcon className='w-[2rem]' icon={faBookOpenReader}/>
                            <h2>storytelling</h2>
                        </div>
                        <div className='flex bg-blue-100 p-2 items-center gap-4 text-2xl md:text-3xl font-semibold px-5 rounded-full text-blue-800 md:mb-0 mb-4'>
                            <FontAwesomeIcon className='w-[2rem]' icon={faChartSimple} />
                            <h2>Data visualization</h2>
                        </div>
                    </div>
                    <div className='md:flex md:flex-wrap mt-4 gap-4 translate-x-4'>
                        <div className='flex bg-blue-100 p-2 items-center gap-4 text-2xl md:text-3xl font-semibold px-5 rounded-full text-blue-800 md:mb-0 mb-4'>
                            <FontAwesomeIcon className='w-[2rem]' icon={faHeadphones} />
                            <h2>Music</h2>
                        </div>
                        <div className='flex bg-blue-100 p-2 items-center gap-4 text-2xl md:text-3xl font-semibold px-5 rounded-full text-blue-800 md:mt-0 mt-4'>
                            <FontAwesomeIcon className='w-[1.4rem]' icon={faDollar} />
                            <h2>Money</h2>
                        </div>
                    </div>
                </div>

                <div className='flex w-[100%] md:items-center m-0 md:m-15 md:mt-0 mt-[5rem] gap-5'>
                    <div className='bg-blue-500 h-[13rem] place-content-center rounded-2xl text-center p-1 md:p-3 w-[100%]'>
                        <h1 className='font-extrabold text-5xl text-blue-800'>Years</h1>
                        <p className='text text-xl md:text-2xl text-white'>of Experience</p>
                    </div>
                    <div className='bg-blue-500 h-[13rem] place-content-center rounded-2xl text-center p-1 md:p-3 w-[100%]'>
                        <h1 className='font-extrabold text-6xl text-blue-800'>7+</h1>
                        <p className='text-xl text md:text-2xl text-white'>Projects Completed</p>
                    </div>
                </div>
            </main>
        </div>
        <section className='p-7'>
            <div className='bg-blue-950 aboutText p-5 md:p-10 rounded-2xl font-sans text-white'>
                <p className='my-4 md:my-5 text-xl md:text-2xl '>I&apos;m Bisiriyu Esther Temitope, I am a detail-oriented and results-driven Data Analyst with a background in finance and a strong proficiency in data analysis, business intelligence, and data visualization.</p>

                {readMore && (
                    <div>
                        <p className='my-4 md:my-5 text-xl md:text-2xl'> My expertise includes working with tools like Microsoft Excel, Power BI, SQL, and Python (Pandas and NumPy) to derive actionable insights from complex datasets.</p>
                        <p className='my-4 md:my-5 text-xl md:text-2xl'>I specialize in Identifying trends, creating intuitive dashboards, designing KPIs, and consolidating data for comprehensive analysis.</p>
                        <p className='my-4 md:my-5 text-xl md:text-2xl'>I aim to help organizations make informed, data-driven decisions.</p>
                    </div>
                )}
            </div>
            <div onClick={handleReadMore} className='text-center my-5 text-3xl flex place-content-center'>
                <button onClick={handleReadMore} className="flex items-center border-2 hover:bg-white transition-all border-blue-800 text-blue-800 p-2 rounded-full cursor-pointer">
                    <FontAwesomeIcon icon={readMore ? faEyeSlash : faEye} className="mr-2" />
                    {readMore ? 'Show Less' : 'Read More'}
                </button>
            </div>
        </section>
        <section id='Project' className='mx-2'>
            <h1 className='text-blue-600 section2 text-3xl md:text-6xl text-center mt-10 font-semibold'>Projects</h1>
            {/* <h1 className='text-blue-800 text-3xl md:text-6xl text-center mb-10 translate-y-[-2.5rem]  md:translate-y-[-3.3rem] font-semibold'>Projects</h1> */}
            {/* <main className='place-content-center gap-6 md:gap-26 flex my-10 cursor-pointer'>
                <button onClick={() => setSelectedCategory('all')} className='bg-blue-100 font-semi text-xl md:text-4xl font-semibold text-blue-800 px-2 md:px-9 p-1 hover:text-white hover:bg-blue-800 transition-all rounded-xl shadow shadow-slate-100'>All</button>
                <button onClick={() => setSelectedCategory('dashboard')} className='border-2 bg-blue-100 font-semi border-blue-800 text-xl md:text-4xl font-semibold text-blue-800 px-2 md:px-9 p-1 hover:text-white hover:bg-blue-800 transition-all rounded-xl'>Dashboard</button>
                <button onClick={() => setSelectedCategory('data-vitualization')} className='border-2 bg-blue-100 font-semi border-blue-800 text-xl md:text-4xl font-semibold text-blue-800 cursor-pointer px-1 md:px-9 p-1 hover:text-white hover:bg-blue-800 transition-all rounded-xl'>Data</button>
            </main> */}
            <div className='project grid md:grid-cols-2 mx-0 m-2 md:m-10 gap-5 text-white'>
                <div className='p-5 mx-3 bg-blue-950 rounded-3xl relative'>
                    <Link href='https://drive.google.com/drive/folders/1wkhfqN1RL1yFHbYbdbYXiKjeURtGgCmX?usp=sharing'><FontAwesomeIcon className='absolute right-10 text-blue-800 bg-white p-[5px] cursor-pointer rounded-full top-3 w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem]' icon={faLink}/></Link>
                    <div className='mt-10 mb-2'>
                        <Image className='rounded-2xl h-[fit-content] md:h-[19.5rem]' src={cocaCola} alt='project-image'/>
                    </div>
                    <div>
                        <h1 className='text-2xl md:text-3xl font-extrabold'>Coca Cola 2022 Business Performance Report</h1>
                        <p className='text-2xl font-semibold my-2'>Project Category</p>
                        <main className='flex gap-3'>
                            <div className='bg-white p-2 px-2 md:px-4 rounded-full text-blue-800 flex items-center gap-2'>
                                <FontAwesomeIcon icon={faBriefcase} />
                                <h2>Sales Dashboard</h2>
                            </div>
                        </main>
                        <p className='text-2xl font-semibold my-3'>Technologies Used</p>
                        <div className='flex gap-3'>
                        <div className='bg-white text-blue-800 rounded-full p-1 px-3'>
                                <p>Power Bi</p>
                            </div>
                            <div className='bg-white text-blue-800 rounded-full p-1 px-3'>
                                <p>DAX</p>
                            </div>
                            <div className='bg-white text-blue-800 rounded-full p-1 px-3'>
                                <p>Power Query</p>
                            </div>
                        </div>
                        <p className='text-white font-serif description'><span className='font-semibold'>Description:</span>I analyzed Coca-Cola’s 2022 U.S. sales and operating profit using Excel, covering retailers, regions, states, and cities. The dashboard revealed key insights, such as $8.2M in total sales, $3.04M earnings, and Walmart as the top retailer with $4M sales. Coca-Cola led beverage sales at $1.92M with 3.99M units sold. This project delivered clear visualizations and actionable recommendations to support business performance.</p>
                        <div className=' text-white text-xl md:text-2xl font- rounded-xl flex justify-around my-2 gap-3'>
                            <Link className='bg-black w-[70%] text-white px-3 md:px-6 p-1 rounded-xl text-center transition-transform duration-300 hover:scale-105 hover:bg-blue-600' href='https://drive.google.com/drive/folders/1wkhfqN1RL1yFHbYbdbYXiKjeURtGgCmX?usp=sharing'><FontAwesomeIcon className='text-white mr-3' icon={faLink} />View</Link>
                            <Link className='bg-black w-[70%] text-white px-3 md:px-6 p-1 rounded-xl text-center transition-transform duration-300 hover:scale-105 hover:bg-blue-600' href='https://github.com/BisiriyuTemitope/Coca-Cola-2022-Business-Performance-Report'><FontAwesomeIcon className='text-white mr-3' icon={faGithub} />Github</Link>
                        </div>
                    </div>
                </div>
                <div className='p-5 mx-3 bg-blue-950 rounded-3xl relative'>
                    <Link href='https://drive.google.com/drive/folders/1NjgNTSJj9gOQVYo8kr_JlPQZ_9H0CtQr?usp=sharing'><FontAwesomeIcon className='absolute right-10 text-blue-800 bg-white p-[5px] cursor-pointer rounded-full top-3 w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem]' icon={faLink}/></Link>
                    <div className='mt-10 mb-2'>
                        <Image className='rounded-2xl h-[fit-content] md:h-[19.5rem]' src={SalesPerformance} alt='project-image'/>
                    </div>
                    <div>
                        <h1 className='text-2xl md:text-3xl font-extrabold'>Sales Performance</h1>
                        <p className='text-2xl font-semibold my-2'>Project Category</p>
                        <main className='flex gap-3'>
                            <div className='bg-white p-2 px-2 md:px-4 rounded-full text-blue-800 flex items-center gap-2'>
                                <FontAwesomeIcon icon={faBriefcase} />
                                <h2>Sales Dashboard</h2>
                            </div>
                        </main>
                        <p className='text-2xl font-semibold my-3'>Technologies Used</p>
                        <div className='flex gap-3'>
                        <div className='bg-white text-blue-800 rounded-full p-1 px-3'>
                                <p>Power Bi</p>
                            </div>
                            <div className='bg-white text-blue-800 rounded-full p-1 px-3'>
                                <p>DAX</p>
                            </div>
                            <div className='bg-white text-blue-800 rounded-full p-1 px-3'>
                                <p>Power Query</p>
                            </div>
                        </div>
                        <p className='text-white font-serif description'><span className='font-semibold'>Description:</span> I designed an interactive Power BI dashboard to visualize and analyze sales performance across different dimensions. Users can explore trends using dynamic filters for quarter and year, allowing for a deeper understanding of key metrics like total sales, orders, customers, and regional performance.</p>
                        <div className=' text-white text-xl md:text-2xl font- rounded-xl flex justify-around my-2'>
                            <Link className='bg-black w-[70%] text-white px-3 md:px-6 p-1 rounded-xl text-center transition-transform duration-300 hover:scale-105 hover:bg-blue-600' href='https://drive.google.com/drive/folders/1NjgNTSJj9gOQVYo8kr_JlPQZ_9H0CtQr?usp=sharing'><FontAwesomeIcon className='text-white mr-3' icon={faLink} />View</Link>
                        </div>
                    </div>
                </div>
                {/* {selectedCategory === 'all' || selectedCategory === 'Backend' ? ( */}
                <div className='p-5 mx-3 bg-blue-950 rounded-3xl relative'>
                    <Link href='https://drive.google.com/drive/folders/1c3KMYPTmppm-Gyt2m-Bthj7m3X_qL4Ap?usp=sharing'><FontAwesomeIcon className='absolute right-10 text-blue-800 bg-white p-[5px] cursor-pointer rounded-full top-3 w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem]' icon={faLink}/></Link>
                    <div className='mt-10 mb-2'>
                        <Image className='rounded-2xl h-[fit-content] md:h-[19.5rem]' src={Beauty_Dashboard} alt='project-image'/>
                    </div>
                    <div>
                        <h1 className='text-2xl md:text-3xl font-extrabold'>Beauty Store</h1>
                        <p className='text-2xl font-semibold my-2'>Project Category</p>
                        <main className='flex gap-3'>
                            <div className='bg-white p-2 px-4 rounded-full text-blue-800 flex items-center gap-2'>
                                <FontAwesomeIcon icon={faBriefcase} />
                                <h2>Dashboard Project</h2>
                            </div>
                        </main>
                        <p className='text-2xl font-semibold my-3'>Technologies Used</p>
                        <div className='flex gap-3'>
                            <div className='bg-white text-blue-800 rounded-full p-1 px-2 md:px-3'>
                                <p>Python</p>
                            </div>
                            <div className='bg-white text-blue-800 rounded-full p-1 px-2 md:px-3'>
                                <p>Power Bi</p>
                            </div>
                            <div className='bg-white text-blue-800 rounded-full p-1 px-3'>
                                <p>DAX</p>
                            </div>
                        </div>
                        <p className='text-white font-serif description'><span className='font-semibold'>Description:</span> I developed a Power BI dashboard to track and analyze sales performance for a beauty store, focusing on metrics such as total sales, profit, order volume, and customer segments.</p>
                        <div className=' text-white text-xl md:text-2xl font- rounded-xl flex justify-around my-2'>
                            <Link className='bg-black w-[70%] text-white px-3 md:px-6 p-1 rounded-xl text-center transition-transform duration-300 hover:scale-105 hover:bg-blue-600' href='https://drive.google.com/drive/folders/1c3KMYPTmppm-Gyt2m-Bthj7m3X_qL4Ap?usp=sharing'><FontAwesomeIcon className='text-white mr-3' icon={faLink} />View</Link>
                        </div>
                    </div>
                </div>
                {/* // ) : null} */}
                {/* {selectedCategory === 'all' || selectedCategory === 'dashboard' ? ( */}
                <div className='p-5 mx-3 bg-blue-950 rounded-3xl relative'>
                    <Link href='https://drive.google.com/drive/folders/1NAcH2gC8gG3_rk2DRTF3hITzdGTonkGl?usp=sharing'><FontAwesomeIcon className='absolute right-10 text-blue-800 bg-white p-[5px] cursor-pointer rounded-full top-3 w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem]' icon={faLink}/></Link>
                    <div className='mt-10 mb-2'>
                        <Image className='rounded-2xl h-[fit-content] md:h-[19.5rem]' src={Funiture} alt='project-image'/>
                    </div>
                    <div>
                        <h1 className='text-2xl md:text-3xl font-extrabold'>Furniture Sales Analysis</h1>
                        <p className='text-2xl font-semibold my-2'>Project Category</p>
                        <main className='flex gap-3'>
                            <div className='bg-white p-2 px-4 rounded-full text-blue-800 flex items-center gap-2'>
                                <FontAwesomeIcon icon={faBriefcase} />
                                <h2>Home Services Project</h2>
                            </div>
                        </main>
                        <p className='text-2xl font-semibold my-3'>Technologies Used</p>
                        <div className='flex gap-3'>
                            <div className='bg-white text-blue-800 rounded-full p-1 px-2 md:px-3'>
                                <p>Power Bi</p>
                            </div>
                            <div className='bg-white text-blue-800 rounded-full p-1 px-2 md:px-3'>
                                <p>DAX</p>
                            </div>
                            <div className='bg-white text-blue-800 rounded-full p-1 px-3'>
                                <p>Power Query</p>
                            </div>
                        </div>
                        <p className='text-white font-serif description'><span className='font-semibold'>Description:</span> Furniture Sales Analysis
I Designed a dynamic Excel dashboard to analyze 9,994+ U.S. furniture orders totaling over $742K in revenue. Used pivot tables, charts, slicers, and conditional formatting to uncover key business trends. Insights included peak sales in December ($121K), top-performing category (Chairs: $328K), and highest-grossing city (New York City: $75.7K). The dashboard enables strategic decision-making across product lines, regions, and shipping performance.</p>
                        <div className=' text-white text-xl md:text-2xl font- rounded-xl flex justify-around my-2 mt-5 w-[100%]'>
                            <Link className='bg-black w-[70%] text-white px-3 md:px-6 p-1 rounded-xl text-center transition-transform duration-300 hover:scale-105 hover:bg-blue-600' href='https://drive.google.com/drive/folders/1NAcH2gC8gG3_rk2DRTF3hITzdGTonkGl?usp=sharing'><FontAwesomeIcon className='text-white mr-3' icon={faLink} />View</Link>
                        </div>
                    </div>
                </div>
                <div className='p-5 mx-3 bg-blue-950 rounded-3xl relative'>
                    <Link href='https://drive.google.com/drive/folders/13Xs5QuPgTLD0bJ4zybn-vH2y81jIQEzh?usp=sharing'><FontAwesomeIcon className='absolute right-10 text-blue-800 bg-white p-[5px] cursor-pointer rounded-full top-3 w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem]' icon={faLink}/></Link>
                    <div className='mt-10 mb-2'>
                        <Image className='rounded-2xl h-[fit-content] md:h-[19.5rem]' src={CarInsurance} alt='project-image' title='car Insurance image'/>
                    </div>
                    <div>
                        <h1 className='text-2xl md:text-3xl font-extrabold'>Car Insurance Claims Analysis</h1>
                        <p className='text-2xl font-semibold my-2'>Project Category</p>
                        <main className='flex gap-3'>
                            <div className='bg-white p-2 px-4 rounded-full text-blue-800 flex items-center gap-2'>
                                <FontAwesomeIcon icon={faBriefcase} />
                                <h2>Car Insurance Project</h2>
                            </div>
                        </main>
                        <p className='text-2xl font-semibold my-3'>Technologies Used</p>
                        <div className='flex gap-3'>
                            <div className='bg-white text-blue-800 rounded-full p-1 px-2 md:px-3'>
                                <p>Power Bi</p>
                            </div>
                            <div className='bg-white text-blue-800 rounded-full p-1 px-2 md:px-3'>
                                <p>DAX</p>
                            </div>
                            <div className='bg-white text-blue-800 rounded-full p-1 px-3'>
                                <p>Power Query</p>
                            </div>
                        </div>
                        <p className='text-white font-serif description'><span className='font-semibold'>Description:</span> An interactive Power BI dashboard exploring trends in car insurance claims. The project includes data cleaning with Power Query, age grouping, and custom measures to highlight claim frequency, cost patterns, and policyholder demographics. </p>
                        <div className=' text-white text-xl md:text-2xl font- rounded-xl flex justify-around my-2 mt-5 w-[100%]'>
                            <Link className='bg-black w-[70%] text-white px-3 md:px-6 p-1 rounded-xl text-center transition-transform duration-300 hover:scale-105 hover:bg-blue-600' href='https://drive.google.com/drive/folders/13Xs5QuPgTLD0bJ4zybn-vH2y81jIQEzh?usp=sharing'><FontAwesomeIcon className='text-white mr-3' icon={faLink} />View</Link>
                        </div>
                    </div>
                </div>
                {/* ) : null} */}
                {/* {selectedCategory === 'all' || selectedCategory === 'dashboard' ? ( */}
                <div className='p-5 mx-3 bg-blue-950 rounded-3xl relative'>
                    <Link href='https://drive.google.com/drive/folders/15ZY-p6Mf1OniN9F1692KlyYADTtwxzUB?usp=sharing'><FontAwesomeIcon className='absolute right-10 text-blue-800 bg-white p-[5px] cursor-pointer rounded-full top-3 w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem]' icon={faLink}/></Link>
                    <div className='mt-10 mb-2'>
                        <Image className='rounded-2xl h-[fit-content] md:h-[19.5rem]' src={BeautyStore} alt='project-image'/>
                    </div>
                    <div>
                        <h1 className='text-2xl md:text-3xl font-extrabold'>Active Wear Sales</h1>
                        <p className='text-2xl font-semibold my-2'>Project Category</p>
                        <main className='flex gap-3'>
                            <div className='bg-white p-2 px-2 md:px-4 rounded-full text-blue-800 flex items-center gap-2'>
                                <FontAwesomeIcon icon={faBriefcase} />
                                <h2>Dashboard</h2>
                            </div>
                        </main>
                        <p className='text-2xl font-semibold my-3'>Technologies Used</p>
                        <div className='flex gap-3'>
                            <div className='bg-white text-blue-800 rounded-full p-1 px-3'>
                                <p>Power Bi</p>
                            </div>
                            <div className='bg-white text-blue-800 rounded-full p-1 px-3'>
                                <p>DAX</p>
                            </div>
                            <div className='bg-white text-blue-800 rounded-full p-1 px-3'>
                                <p>Power Query</p>
                            </div>
                        </div>
                        <p className='text-white font-serif description'><span className='font-semibold'>Description:</span> I created a Power BI dashboard to analyze sales performance for an activewear company, focusing on key metrics such as total revenue, profit, order quantity, and profit margin.</p>
                        <div className=' text-white text-xl md:text-2xl font- rounded-xl flex justify-around my-2 mt-5'>
                            <Link className='bg-black w-[70%] text-white px-3 md:px-6 p-1 rounded-xl text-center transition-transform duration-300 hover:scale-105 hover:bg-blue-600' href='https://drive.google.com/drive/folders/15ZY-p6Mf1OniN9F1692KlyYADTtwxzUB?usp=sharing'><FontAwesomeIcon className='text-white mr-3' icon={faLink} />View</Link>
                        </div>
                    </div>
                </div>
                {/* // ) : null} */}
                {/* {selectedCategory === 'all' || selectedCategory === 'dashboard' ? ( */}
                <div className='p-5 mx-3 bg-blue-950 rounded-3xl relative'>
                    <Link href='https://drive.google.com/drive/folders/1193TgyVsrdSvk1Q35dzj1IN9qisaVFDH?usp=sharing'><FontAwesomeIcon className='absolute right-10 text-blue-800 bg-white p-[5px] cursor-pointer rounded-full top-3 w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem]' icon={faLink}/></Link>
                    <div className='mt-10 mb-2'>
                        <Image className='rounded-2xl h-[fit-content] md:h-[19.5rem]' src={HR_Attrition} alt='project-image'/>
                    </div>
                    <div>
                        <h1 className='text-2xl md:text-3xl font-extrabold'>HR Attrition</h1>
                        <p className='text-2xl font-semibold my-2'>Project Category</p>
                        <main className='flex gap-3'>
                            <div className='bg-white p-2 px-2 md:px-4 rounded-full text-blue-800 flex items-center gap-2'>
                                <FontAwesomeIcon icon={faBriefcase} />
                                <h2>Hr Attrition Dashboard</h2>
                            </div>
                        </main>
                        <p className='text-2xl font-semibold my-3'>Technologies Used</p>
                        <div className='flex gap-3'>
                            <div className='bg-white text-blue-800 rounded-full p-1 px-3'>
                                <p>Excel</p>
                            </div>
                            <div className='bg-white text-blue-800 rounded-full p-1 px-3'>
                                <p>Power Bi</p>
                            </div>
                            <div className='bg-white text-blue-800 rounded-full p-1 px-3'>
                                <p>DAX</p>
                            </div>
                        </div>
                        <p className='text-white font-serif description'><span className='font-semibold'>Description:</span> In this project, I analyzed employee attrition data using Power BI to uncover key factors contributing to turnover. I built an interactive dashboard that visualized metrics such as attrition rates by department.</p>
                        <div className=' text-white text-xl md:text-2xl font- rounded-xl flex justify-around my-2 mt-5 gap-3'>
                            <Link className='bg-black w-[70%] text-white px-3 md:px-6 p-1 rounded-xl text-center transition-transform duration-300 hover:scale-105 hover:bg-blue-600' href='https://drive.google.com/drive/folders/1193TgyVsrdSvk1Q35dzj1IN9qisaVFDH?usp=sharing/'><FontAwesomeIcon className='text-white mr-3' icon={faLink} />View</Link>
                            <Link className='bg-black w-[70%] text-white px-3 md:px-6 p-1 rounded-xl text-center transition-transform duration-300 hover:scale-105 hover:bg-blue-600' href='https://github.com/BisiriyuTemitope/HR-Attrition-Dashbaord/blob/main/README.md'><FontAwesomeIcon className='text-white mr-3' icon={faGithub} />Github</Link>
                        </div>
                    </div>
                </div>
                {/* // ) : null} */}
                {/* {selectedCategory === 'all' || selectedCategory === 'dashboard' ? ( */}
                <div className='p-5 mx-3 bg-blue-950 rounded-3xl relative'>
                    <Link href='https://drive.google.com/drive/folders/1HFpdQBDITEl9-T7v02Y8LkbQaBj14ffU?usp=sharing'><FontAwesomeIcon className='absolute right-10 text-blue-800 bg-white p-[5px] cursor-pointer rounded-full top-3 w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem]' icon={faLink}/></Link>
                    <div className='mt-10 mb-2'>
                        <Image className='rounded-2xl h-[fit-content] md:h-[19.5rem]' src={SalesAndProfit} alt='project-image'/>
                    </div>
                    <div>
                        <h1 className='text-2xl md:text-3xl font-extrabold'>Sales And Profit Insight</h1>
                        <p className='text-2xl font-semibold my-2'>Project Category</p>
                        <main className='flex gap-3'>
                            <div className='bg-white p-2 px-2 md:px-4 rounded-full text-blue-800 flex items-center gap-2'>
                                <FontAwesomeIcon icon={faBriefcase} />
                                <h2>Sales & Profit Dashboard</h2>
                            </div>
                        </main>
                        <p className='text-2xl font-semibold my-3'>Technologies Used</p>
                        <div className='flex gap-3'>
                            <div className='bg-white text-blue-800 rounded-full p-1 px-3'>
                                <p>Excel</p>
                            </div>
                            <div className='bg-white text-blue-800 rounded-full p-1 px-3'>
                                <p>Power Bi</p>
                            </div>
                            <div className='bg-white text-blue-800 rounded-full p-1 px-3'>
                                <p>DAX</p>
                            </div>
                            <div className='bg-white text-blue-800 rounded-full p-1 px-3'>
                                <p>SQL</p>
                            </div>
                        </div>
                        <p className='text-white font-serif description'><span className='font-semibold'>Description:</span> I performed exploratory data analysis using SQL and built an interactive Power BI dashboard to visualize sales, profit, COGS, and discount impact across countries, segments, and products.</p>
                        <div className=' text-white text-xl md:text-2xl font- rounded-xl flex justify-around my-2 mt-5'>
                            <Link className='bg-black w-[70%] text-white px-3 md:px-6 p-1 rounded-xl text-center transition-transform duration-300 hover:scale-105 hover:bg-blue-600' href='https://drive.google.com/drive/folders/1HFpdQBDITEl9-T7v02Y8LkbQaBj14ffU?usp=sharing'><FontAwesomeIcon className='text-white mr-3' icon={faLink} />View</Link>
                        </div>
                    </div>
                </div>
                {/* ) : null} */}
                {/* {selectedCategory === 'all' || selectedCategory === 'data-vitualization' ? ( */}
                <div className='p-5 mx-3 bg-blue-950 rounded-3xl relative'>
                    <Link href='https://drive.google.com/drive/folders/10zKS6VJeQWCDMSnQYwvf4sMg4840n7_p?usp=sharing'><FontAwesomeIcon className='absolute right-10 text-blue-800 bg-white p-[5px] cursor-pointer rounded-full top-3 w-[1.5rem] h-[1.5rem] md:w-[2rem] md:h-[2rem]' icon={faLink}/></Link>
                    <div className='mt-10 mb-2'>
                        <Image className='rounded-2xl h-[fit-content] md:h-[19.5rem]' src={DataClearning} alt='project-image'/>
                    </div>
                    <div>
                        <h1 className='text-2xl md:text-3xl font-extrabold'>Data Cleaning</h1>
                        <p className='text-2xl font-semibold my-2'>Project Category</p>
                        <main className='flex gap-3'>
                            <div className='bg-white p-2 px-2 md:px-4 rounded-full text-blue-800 flex items-center gap-2'>
                                <FontAwesomeIcon icon={faBriefcase} />
                                <h2>Data Clearning</h2>
                            </div>
                        </main>
                        <p className='text-2xl font-semibold my-3'>Technologies Used</p>
                        <div className='flex gap-3'>
                            <div className='bg-white text-blue-800 rounded-full p-1 px-3'>
                                <p>Excel</p>
                            </div>
                        </div>
                        <p className='text-white font-serif description'><span className='font-semibold'>Description:</span> This project involved cleaning and preparing a raw dataset using Microsoft Excel to ensure accuracy and consistency for analysis.</p>
                        <div className=' text-white text-xl md:text-2xl font- rounded-xl flex justify-around my-2 mt-5'>
                            <Link className='bg-black w-[70%] text-white px-3 md:px-6 p-1 rounded-xl text-center transition-transform duration-300 hover:scale-105 hover:bg-blue-600' href='https://drive.google.com/drive/folders/10zKS6VJeQWCDMSnQYwvf4sMg4840n7_p?usp=sharing'><FontAwesomeIcon className='text-white mr-3' icon={faLink} />View</Link>
                        </div>
                    </div>
                </div>
                {/* ) : null} */}
            </div>
        </section>
        <p id='Experience'></p>
        <section>
            <h1 className='text-blue-800 section2 font-semibold text-4xl md:text-5xl text-center mt-10 md:mt-5 mb-0 md:mb-[-1rem]'>Experiences</h1>
            <main className='exprience p-5 md:p-10 grid grid-cols-1 gap-7 md:grid-cols-2 text-white'>
                <div className=' bg-blue-800 opacity-85 rounded-3xl pb-[2rem]'>
                    <div className='md:flex flex-wrap gap-5 p-3 md:p-6 justify-between'>
                        <div className='flex bg-blue-500 rounded-full p-2 items-center'>
                            <div>
                                <Image className='bg-transparent p-2 w-[3rem] h-[3rem] rounded-full' src={JobImg} alt='job-img'></Image>
                            </div>
                            <div>
                                <p className='text-2xl font-semibold'>Zenith Bank Plc</p>
                                <p>LA, Nigeria</p>
                            </div>
                        </div>
                        <div className='text-2xl font-semibold mt-[2rem] md:mt-0 bg-black text-white h-[3rem] rounded-full p-2'>
                            <p><FontAwesomeIcon className='pr-2' icon={faCalendar}/>2023 - Present</p>
                        </div>
                    </div>
                    <h1 className='my-2 pl-4 text-2xl font-semibold'><FontAwesomeIcon className='mr-3' icon={faLaptop}/>Executive Trainee (Operations Team member)</h1>
                    <div>
                        <p className='text-xl my-2 pl-4'> <FontAwesomeIcon className='mr-3 text-sm' icon={faLaptop}/>Process customer transactions, including deposits, withdrawals, and transfers, ensuring accuracy and efficiency.</p>
                        <p className='text-xl my-2 pl-4'> <FontAwesomeIcon className='mr-3 text-sm' icon={faLaptop}/>Process customer transactions, including deposits, withdrawals, and transfers, ensuring accuracy and efficiency.</p>
                        <p className='text-xl my-2 pl-4'> <FontAwesomeIcon className='mr-3 text-sm' icon={faLaptop}/>Uses Excel to Reconcile and balance cash drawers, ensuring zero discrepancies.</p>
                        <p className='text-xl my-2 pl-4'> <FontAwesomeIcon className='mr-3 text-sm' icon={faLaptop}/>Deliver exceptional customer service while resolving transactional issues effectively.</p>
                    </div>
                </div>
                <div className=' bg-blue-800 opacity-85 rounded-3xl pb-[2rem]'>
                    <div className='md:flex flex-wrap gap-5 p-3 md:p-6 justify-between'>
                        <div className='flex bg-blue-500 rounded-full p-2 items-center'>
                            <div>
                                <Image className='bg-transparent p-2 w-[3rem] h-[3rem] rounded-full' src={JobImg} alt='job-img'></Image>
                            </div>
                            <div>
                                <p className='text-2xl font-semibold'>Access ARM Pension</p>
                                <p>LA, Nigeria</p>
                            </div>
                        </div>
                        <div className='text-2xl font-semibold mt-[2rem] md:mt-0 bg-black text-white h-[3rem] rounded-full p-2'>
                        <p><FontAwesomeIcon className='pr-2' icon={faCalendar}/>2022 - 2023</p>
                        </div>
                    </div>
                    <h1 className='my-2 pl-4 text-2xl font-semibold'><FontAwesomeIcon className='mr-3' icon={faLaptop}/>NYSC Finance Intern</h1>
                    <div>
                        <p className='text-xl my-2 pl-4'> <FontAwesomeIcon className='mr-3 text-sm' icon={faLaptop}/>Assisted in preparing month-end financial reports and reconciling accounts to support financial decision-making</p>
                        <p className='text-xl my-2 pl-4'> <FontAwesomeIcon className='mr-3 text-sm' icon={faLaptop}/>Posted journal entries and contributed to accurate financial record-keeping</p>
                        <p className='text-xl my-2 pl-4'> <FontAwesomeIcon className='mr-3 text-sm' icon={faLaptop}/>Supported accounts receivable and payable functions to ensure timely payments and collections</p>
                        <p className='text-xl my-2 pl-4'> <FontAwesomeIcon className='mr-3 text-sm' icon={faLaptop}/>Performed data entry and analysis, enhancing financial tracking efficiency</p>
                        <p className='text-xl my-2 pl-4'> <FontAwesomeIcon className='mr-3 text-sm' icon={faLaptop}/>Automated financial reports to improve decision-making.</p>
                    </div>
                </div>
            </main>
        </section>
        <div className='p-5 md:px-10 my-4 md:my-0'>
            <h1 className='text-5xl section2 text-center mt-4 mb-3 text-blue-800 font-bold md:mt-4'>Education</h1>
            <div className='grid md:grid-cols-2  gap-10'>
                <main className='bg-blue-200 rounded-3xl p-5 md:p-10 w-[100%]'>
                    <div className='flex-wrap md:flex justify-between'>
                        <p className='bg-black text-white text-xl md:text-2xl rounded-full p-2 pl-3'><FontAwesomeIcon className='pr-2 text-2xl' icon={faCalendar}/>2024 - 2025</p>
                        
                        <p className='bg-white mt-5 pl-3 md:mt-0 text-blue-800 font-semibold text-2xl rounded-full p-2'>Tech School</p>
                    </div>
                    <h1 className='my-4 flex gap-4 text-blue-900 items-center text-xl font-semibold'><FontAwesomeIcon className='bg-black text-white rounded-full text-xl p-2 w-[1.5rem] h-[1.5rem]' icon={faGraduationCap}/>Tech Studio Academy</h1>
                    <h1 className='my-4 flex gap-4 text-blue-900 items-center text-xl font-semibold'><FontAwesomeIcon className='bg-black text-white rounded-full text-xl p-2 w-[1.5rem] h-[1.5rem]' icon={faBook}/>Diploma Data Analyst</h1>
                    <h1 className='my-4 flex gap-4 text-blue-900 items-center text-xl font-semibold'><FontAwesomeIcon className='bg-black text-white rounded-full text-xl w-[1.5rem] h-[1.5rem] p-2' icon={faLocationDot}/>Lagos State</h1>
                </main>
                <main className='bg-blue-200 rounded-3xl p-5 md:p-10 w-[100%]'>
                    <div className='flex-wrap md:flex justify-between'>
                        <p className='bg-black text-white text-xl md:text-2xl rounded-full p-2 pl-3'><FontAwesomeIcon className='pr-2 text-2xl' icon={faCalendar}/>2016 - 2021</p>
                        <p className='bg-white mt-5 pl-3 md:mt-0 text-blue-800 font-semibold text-2xl rounded-full p-2'>University</p>
                    </div>
                    <h1 className='my-4 flex gap-4 text-blue-900 items-center text-xl font-semibold'><FontAwesomeIcon className='bg-black text-white rounded-full text-xl p-2 w-[1.5rem] h-[1.5rem]' icon={faGraduationCap}/>University Of Lagos</h1>
                    <h1 className='my-4 flex gap-4 text-blue-900 items-center text-xl font-semibold'><FontAwesomeIcon className='bg-black text-white rounded-full text-xl p-2 w-[1.5rem] h-[1.5rem]' icon={faBook}/>BSc FINANCE</h1>
                    <h1 className='my-4 flex gap-4 text-blue-900 items-center text-xl font-semibold'><FontAwesomeIcon className='bg-black text-white rounded-full text-xl w-[1.5rem] h-[1.5rem] p-2' icon={faLocationDot}/>Lagos State</h1>
                </main>
            </div>
        </div>
        <section className='my-[2rem]'>
            <p id='Contact'></p>
            <h1 className='text-5xl text-center section2 text-blue-600 font-semibold'>Contact <span className='pl-2'>Me</span></h1>
            <main className='my-[2rem] mt-[-0.9rem] md:mt-[0.6rem] md:mb-[2rem] mb-0'>
                <div className='md:flex flex-wrap gap-5 justify-center p-3'>
                    <div className='md:my-0 my-[1rem]' >
                        <Link className='flex md:gap-[0.5rem] px-2 justify-between bg-white text-2xl font-semibold md:text-4xl items-center p-1 md:p-2 rounded-full' href='https://www.linkedin.com/in/esther-temitope-bisiriyu-845203207/'>
                            <FontAwesomeIcon className='bg-blue-800 text-white p-2 w-[2.5rem] h-[2.5rem] rounded-full' icon={faLinkedin} />
                            <h1 className='text-blue-800'>LinkedIn</h1>
                        </Link>
                    </div>
                    <div className='md:my-0 my-[1rem]' >
                        <Link className='flex md:gap-[0.5rem] px-2 justify-between bg-white text-2xl font-semibold md:text-4xl items-center p-1 md:p-2 rounded-full' href='https://www.twitter.com/Esther__Temi08'>
                            <FontAwesomeIcon className='bg-black text-white p-2 w-[2.5rem] h-[2.5rem] rounded-full' icon={faSquareXTwitter} />
                            <h1 className='text-black'>X (Twiter)</h1>
                        </Link>
                    </div>
                    <div className='md:my-0' >
                        <Link className='flex md:gap-[0.5rem] px-2 justify-between bg-white text-2xl font-semibold md:text-4xl items-center p-1 md:p-2 rounded-full' href='http://Instagram.com/esther_temi0'>
                            <FontAwesomeIcon className='bg-red-500 text-white p-2 w-[2.5rem] h-[2.5rem] rounded-full' icon={faInstagram} />
                            <h1 className='text-red-500'>Instagram</h1>
                        </Link>
                    </div>
                </div>
                <div className='md:flex flex-wrap gap-5 justify-center p-3'>
                    <div className='md:my-0' >
                        <Link className='flex md:gap-[0.5rem] px-2 justify-between bg-white text-2xl font-semibold md:text-4xl items-center p-1 md:p-2 rounded-full' href='https://web.facebook.com/olasunboabiodun.bisiriyu'>
                            <FontAwesomeIcon className='bg-blue-800 text-white p-2 w-[2.5rem] h-[2.5rem] rounded-full' icon={faSquareFacebook} />
                            <h1 className='text-blue-800'>Facebook</h1>
                        </Link>
                    </div>
                    <div className='md:my-0 my-[1rem]' >
                        <Link className='flex md:gap-[0.5rem] px-2 justify-between bg-white text-2xl font-semibold md:text-4xl items-center p-1 md:p-2 rounded-full' href='mailto:bisiriyuesthertemitope@gmail.com'>
                            <FontAwesomeIcon className='bg-gray-600 text-white p-2 w-[2.5rem] h-[2.5rem] rounded-full' icon={faEnvelope} />
                            <h1 className='text-gray-600'>Email</h1>
                        </Link>
                    </div>
                </div>
            </main>
        </section>
        <footer className='flex bg-blue-800 my-[2rem] items-center md:text-3xl font-semibold border-2 border-blue-800 p-5 px-10 rounded-full justify-between mx-[2.3rem] md:mx-[10rem]'>
            <p>{`© copy ${date} all right reserved`}</p>
        </footer>
        {children}
    </div>
  )
}

const date = new Date().getFullYear();

export default Home