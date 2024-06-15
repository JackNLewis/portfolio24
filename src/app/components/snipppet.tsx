export default function Snippet(){
    return (
        <div className="block relative w-224 pb-8 rounded-xl boxShadow-xl border shadow-md flex justify-center">
            <div className="flex absolute top-5 left-6 gap-x-2">
                <div className="block bg-red-600 w-3 h-3 rounded-full shadow-md"></div>
                <div className="block bg-yellow-400 w-3 h-3 rounded-full shadow-md"></div>
                <div className="block bg-green-600 w-3 h-3 rounded-full shadow-md"></div>
            </div>
            <p className="text-start px-auto pt-16 w-144">
            <span className="text-primary">package</span> main <br/><br/>

            <span className="text-primary">import {"("}</span><br/>
                "fmt"<br/>
                "net.http"<br/>
            <span className="text-primary">{")"}</span><br/><br/>

            <span className="text-primary">func</span> main()<span className="text-primary">{"{"}</span><br/>
                http.HandleFunc("/hello", helloHandler)<br/>
                http.HandleFunc("/world", worldHandler)<br/><br/>

                http.ListenAndServe(":8080",nil)<br/>
                <span className="text-primary">{"}"}</span><br/><br/>

                <span className="text-primary">func</span> helloHandler(w http.ResponseWriter, r *http.Request)<span className="text-primary">{"{"}</span><br/>
                w.Write([]byte{"hello"})<br/>
                <span className="text-primary">{"}"}</span><br/><br/>

                <span className="text-primary">func</span> worldHandler(w http.ResponseWriter, r *http.Request)<span className="text-primary">{"{"}</span><br/>
                w.Write([]byte<span className="text-primary">{"{"}</span>"world"<span className="text-primary">{"}"}</span>)<br/>
                <span className="text-primary">{"}"}</span><br/><br/>

            </p>
        </div>
    )
}