import {useState,useEffect,useRef} from 'react'


export default function useNearScreen({ divisor, distance = "100px" } = {}) {
  const [show, setShow] = useState(false);
  const fromRef = useRef();
  useEffect(() => {
    const element = divisor ? divisor.current : fromRef.current;
    const onCharge = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        if (element.id === "trendylazy") {
          obeserver.unobserve(element);
        } 
      } else {
        setShow(false);
      }
    };
    const obeserver = new IntersectionObserver(onCharge, {
      rootMargin: distance,
    });
    if (element) {
    obeserver.observe(element);  
    } 
      
  }, [distance, divisor]);

  return { show, fromRef };
}
