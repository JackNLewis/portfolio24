export default function Snippet(){
    return (
        <div className="block absolute w-1/2 h-1/2 -bottom-1/4 rounded-xl boxShadow-xl border shadow-md">
            <div className="flex relative top-5 left-6 gap-x-2">
                <div className="block bg-red-600 w-3 h-3 rounded-full shadow-md"></div>
                <div className="block bg-yellow-400 w-3 h-3 rounded-full shadow-md"></div>
                <div className="block bg-green-600 w-3 h-3 rounded-full shadow-md"></div>
            </div>
            <p>
                {/* <span className="hg">package</span> main<br>
                <span className="hg">import(</span><br>
                       "fmt"{"<br>"}
                       "net/http"{"<br>"}
                <span className="hg">)</span>{"<br>"}
                
                <span className="hg">func</span> main() {`<span class="hg">{</span><br>`}
                    http.HandleFunc("/", helloHandler){"{}<br>"}
                    http.ListenAndServe(":8080", nil){`<br>`}
                <span className="hg">{`}`}</span>{`<br>`} */}
            </p>
        </div>
    )
}