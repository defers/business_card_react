import s from "./HomePage.module.css";


const HomePage = () => {

    return (
        <div className = {s.homepage_container}>
            
            <div className= {s.homepage_header}>

                <div className = {s.homepage_title}>
                    <p>Создаем уютные интерьеры</p>
                    <p>Дизайн квартир | ремонт квартир</p>
                </div>

                <div className = {s.homepage_advantages}>
                    <div className = {s.advantage}>
                        <div className = {s.advantage_header}>
                            <p>Полный спектр работ</p>
                        </div> 
                        <div className = {s.advantage_description}>
                            <p>Дизайн, Ремонт, Надзор, Подбор и Заказ материалов</p>
                        </div>
                        <div className = {s.advantage_border}></div>  
                    </div>
                    <div className = {s.advantage}>
                        <div className = {s.advantage_header}>
                            <p>2 года гарантии</p>
                        </div> 
                        <div className = {s.advantage_description}>
                            <p>Даем гарантию на отделочные работы</p>
                        </div>
                        <div className = {s.advantage_border}></div> 
                    </div>
                    <div className = {s.advantage}>
                        <div className = {s.advantage_header}>
                            <p>Преимущество 3</p>
                        </div> 
                        <div className = {s.advantage_description}>
                            <p>Описание преимущества 3</p>
                        </div>
                        <div className = {s.advantage_border}></div> 
                    </div>
                    <div className = {s.advantage}>
                        <div className = {s.advantage_header}>
                            <p>Преимущество 4</p>
                        </div> 
                        <div className = {s.advantage_description}>
                            <p>Описание преимущества 4</p>
                        </div>
                        <div className = {s.advantage_border}></div> 
                    </div>
                </div>

            </div>

        </div>
    )


}


export default HomePage;