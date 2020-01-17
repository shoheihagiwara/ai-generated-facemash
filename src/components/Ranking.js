import React from 'react';
import RankItem from './RankItem';
const images = require.context('../assets', true);

const Ranking = ({ ranking }) => {

    let array = Object.entries(ranking);
    array.sort((a, b) => -(a[1] - b[1]));

    if (array.length === 0) {
        return <p className="center b">No result yet. Go back and click more faces.</p>
    }

    return (
        <div>
            {/*
                Array.from({ length: 60 }, (v, i) => i).map((num) => {
                    return <RankItem id={num + 1}/>
                })
            */}

            <main className="mw6 center">
                {
                    array.map((idScore) => {
                        let id = idScore[0];
                        let score = idScore[1];
                        return (
                            <article key={id} className="w-100 bb b--black-05 pb2 mt2">
                                <RankItem id={id} score={score} />
                            </article>
                        )
                    })
                }
                {/*
                <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                    <div className="dtc w2 w3-ns v-mid">
                        <img src="http://mrmrs.github.io/photos/p/3.jpg" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns" />
                    </div>
                    <div className="dtc v-mid pl3">
                        <h1 className="f6 f5-ns fw6 lh-title black mv0">Arnoldo Degraff</h1>
                        <h2 className="f6 fw4 mt0 mb0 black-60">@99xx88randomhandle</h2>
                    </div>
                    <div className="dtc v-mid">
                        <form className="w-100 tr">
                            <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
                        </form>
                    </div>
                </article>
                <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                    <div className="dtc w2 w3-ns v-mid">
                        <img src="http://mrmrs.github.io/photos/p/4.jpg" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns" />
                    </div>
                    <div className="dtc v-mid pl3">
                        <h1 className="f6 f5-ns fw6 lh-title black mv0">Deirdre Lachance</h1>
                        <h2 className="f6 fw4 mt0 mb0 black-60">@favfavfav</h2>
                    </div>
                    <div className="dtc v-mid">
                        <form className="w-100 tr">
                            <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
                        </form>
                    </div>
                </article>
                <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                    <div className="dtc w2 w3-ns v-mid">
                        <img src="http://mrmrs.github.io/photos/p/5.jpg" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns" />
                    </div>
                    <div className="dtc v-mid pl3">
                        <h1 className="f6 f5-ns fw6 lh-title black mv0">Frederic Starner</h1>
                        <h2 className="f6 fw4 mt0 mb0 black-60">@hungryhippofanatic</h2>
                    </div>
                    <div className="dtc v-mid">
                        <form className="w-100 tr">
                            <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
                        </form>
                    </div>
                </article>
                <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                    <div className="dtc w2 w3-ns v-mid">
                        <img src="http://mrmrs.github.io/photos/p/6.jpg" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns" />
                    </div>
                    <div className="dtc v-mid pl3">
                        <h1 className="f6 f5-ns fw6 lh-title black mv0">Cleveland Ridout</h1>
                        <h2 className="f6 fw4 mt0 mb0 black-60">@purethinking</h2>
                    </div>
                    <div className="dtc v-mid">
                        <form className="w-100 tr">
                            <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
                        </form>
                    </div>
                </article>
                <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                    <div className="dtc w2 w3-ns v-mid">
                        <img src="http://mrmrs.github.io/photos/p/7.jpg" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns" />
                    </div>
                    <div className="dtc v-mid pl3">
                        <h1 className="f6 f5-ns fw6 lh-title black mv0">Leticia Fearon</h1>
                        <h2 className="f6 fw4 mt0 mb0 black-60">@retrofeels</h2>
                    </div>
                    <div className="dtc v-mid">
                        <form className="w-100 tr">
                            <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
                        </form>
                    </div>
                </article>
                <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                    <div className="dtc w2 w3-ns v-mid">
                        <img src="http://mrmrs.github.io/photos/p/10.jpg" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns" />
                    </div>
                    <div className="dtc v-mid pl3">
                        <h1 className="f6 f5-ns fw6 lh-title black mv0">Ahmad Backer</h1>
                        <h2 className="f6 fw4 mt0 mb0 black-60">@ahmadBB</h2>
                    </div>
                    <div className="dtc v-mid">
                        <form className="w-100 tr">
                            <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
                        </form>
                    </div>
                </article>
                <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                    <div className="dtc w2 w3-ns v-mid">
                        <img src="http://mrmrs.github.io/photos/p/11.jpg" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns" />
                    </div>
                    <div className="dtc v-mid pl3">
                        <h1 className="f6 f5-ns fw6 lh-title black mv0">Carlie Noakes</h1>
                        <h2 className="f6 fw4 mt0 mb0 black-60">@carnoakes99</h2>
                    </div>
                    <div className="dtc v-mid">
                        <form className="w-100 tr">
                            <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
                        </form>
                    </div>
                </article>
                */}
            </main>

        </div>
    );
}

export default Ranking;