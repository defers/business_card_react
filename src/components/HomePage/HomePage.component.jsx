import s from "./HomePage.module.css";


const HomePage = () => {

    return (
        <div className = {s.homepage_container}>
            
            <div className= {s.homepage_header}>

                <div className = {s.homepage_title}>
                    <p>Создаем уютные интерьеры</p>
                    <p>Дизайн квартир | ремонт квартир</p>
                </div>

            </div>

        </div>
    )


}


export default HomePage;