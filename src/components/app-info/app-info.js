import './app-info.css';

const AppInfo = ({data}) => {
    const stars = data.filter(item => item.star).length;
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {data.length}</h2>
            <h3>Премию получат: {stars}</h3>
        </div>
    )
}

export default AppInfo;