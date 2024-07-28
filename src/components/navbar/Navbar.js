import React, { useEffect, useRef, useState } from 'react'

const menuItems = [
    {
        name : 'p-wiki',
        href : 'wiki',
        subCategories : [
            {
                title : "Login",
                items : [
                    '1', '2', '3', '4', '5'
                ]
            },
            {
                title : "Board",
                items : [
                    '1', '2', '3', '4', '5', '6', '7'
                ]
            },
            {
                title : "Shop",
                items : [
                    '1', '2', '3', '4', '5', '6', '7', '8'
                ]
            },
            {
                title : "Story",
                items : [
                    '1', '2', '3', '4'
                ]
            },
            {
                title : "Help",
                items : [
                    '1', '2', '3'
                ]
            },
        ]
    }
]
const Navbar = () => {
    const [ activeMenu, setActiveMenu ] = useState(null);
    const subMenuRefs = useRef([]);
    let maxHeight = 0;

    useEffect(() => {
        subMenuRefs.current = subMenuRefs.current.slice(0, menuItems.length);
    }, [])
    
    const handleMouseEnter = (index) => {
        setActiveMenu(index);
        // console.log(`${subMenuRefs.current[index].scrollHeight}px`);
        if( subMenuRefs.current[index] ){
            subMenuRefs.current[index].style.maxHeight = `${subMenuRefs.current[index].scrollHeight}px`
        }
    }
    const handleMouseLeave = (index) => {
        setActiveMenu(null);
        // console.log(activeMenu);
        if( subMenuRefs.current[index] ){
            subMenuRefs.current[index].style.maxHeight = `0px`
        }
    }
    
  return (
    <nav className='w-full relative'>
        {/* 1 depth */}
        <div className='bg-p-red'>
            <div className='w-10/12 m-auto flex justify-between text-cyan-50 py-3'>
                <ul className='flex gap-10'>
                    {
                        menuItems.map((item, index) => (
                        <li key={item.name}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                        ><a href={item.href}>{item.name}</a></li>
                        ))
                    }
                </ul>
                <ul className='flex gap-10'>
                    {
                        ['LOGIN', 'BOARD', 'SHOP', 'STORY', 'HELP'].map(item => <li key={item}><a href='#'>{item}</a></li>)
                    }
                </ul>
            </div>
        </div>
        {/* 2 depth */}
        <div className='relative'
            //  style={{ maxHeight : 0 }}
        >
            {
                menuItems.map((menu, index) => (
                    <div className='p-5'>
                        <div key={menu.name} 
                             ref={ ef => subMenuRefs.current[index] = ef}
                             className='overflow-hidden absolute w-screen top-0 left-0 flex justify-center bg-white
                             transform translate-all duration-300'
                             style={{ maxHeight : 0 }}
                        >
                            <div className='flex'>
                                <h3 className={`w-[300px] h-[${maxHeight}px] border border-r-indigo-500`}>{menu.name}</h3>
                                <div className='grid grid-cols-4'>
                                    {
                                        menu.subCategories.map(category => (
                                            <div>
                                                <h4 key={category.title}><a href='#'>{category.title}</a></h4>
                                                {
                                                    <ul>
                                                        {
                                                            category.items.map(item => <li>{item}</li>)
                                                        }
                                                    </ul>
                                                }
                                            </div>
                                            // subCategories items
                                        ))
                                    }
                                </div>
                                {/* grid end */}
                            </div>
                            {/* title and subCategories */}
                        </div>
                    </div>
                ))
            }
        </div>
    </nav>
  )
}

export default Navbar