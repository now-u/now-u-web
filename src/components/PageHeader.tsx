interface PageHeaderProps {
    title: string;
    body: string[];
}

const PageHeaderTile = (props: { text: string }): JSX.Element => {
    return <h1 className="text-2xl py-5 font-bold"> {props.text} </h1>
}

const PageHeaderBody = (props: { text: string[] }): JSX.Element => {
    const paragraphs = props.text.map((paragraph) => {
        return <p className="text-md py-2"> {paragraph} </p>;
    });
    return <> { paragraphs } </>;
}

export const PageHeader = (props: PageHeaderProps): JSX.Element => {
    return <div className="bg-gradient-to-b from-gradlight to-graddark grid place-items-center px-5 py-20">
        <div className="max-w-3xl text-center">
          <PageHeaderTile text={props.title}/>
          <PageHeaderBody text={props.body}/>
        </div>
    </div>
}
