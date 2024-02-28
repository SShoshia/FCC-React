import Card from "./Card"

export default function Page(props) {
    return (
        <div className="cards-page">
            {props.data.map(item => <Card{...item}/>)}
        </div>
    )
}
