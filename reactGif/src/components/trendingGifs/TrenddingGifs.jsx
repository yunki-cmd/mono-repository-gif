import React,{Suspense} from 'react'
import LazyTrendy from "../../Hooks/lazytrendy";

const Trenddinglazy = React.lazy(() => import("./trenddynglazy"))


export default function LazyTrending() {

  const { show, fromRef } = LazyTrendy();
  return (
    <div ref={fromRef} id="trendylazy">
      <Suspense fallback={"loanding...."}>{show ? <Trenddinglazy /> : null}</Suspense>
    </div>
  );

}


