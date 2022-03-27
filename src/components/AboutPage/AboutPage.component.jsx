import s from "./AboutPage.module.css";

const AboutPage = () => {


    return (

        <div className = {s.page_container}>

            <div className = {s.title_container}>
                <h1>Наши эксперты</h1>

            </div>

            <div className = {s.content_container}>
                <div className = {s.content_card}>
                    <img className = {s.content_photo} src="/img/about_kristina.jpg" alt="" />
                </div>

                <div className = {s.content_card}>
                    <img className = {s.content_photo} src="/img/about_kristina.jpg" alt="" />
                </div>

                <div className = {s.content_card}>
                    <img className = {s.content_photo} src="/img/about_kristina.jpg" alt="" />
                </div>

                <div className = {s.content_card}>
                    <img className = {s.content_photo} src="/img/about_kristina.jpg" alt="" />
                </div>
            </div>

        </div>

    )

}

export default AboutPage;