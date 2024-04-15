import React, { useEffect } from "react";
import style from "./style.module.css";
import NotFound from "../../assets/images/notFound.svg";
import { useLocation, useNavigate } from 'react-router-dom';

export default function NotFoundPage() {

// 15.04
  const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
		if (
			location.pathname === '/GardenProject/' ||
			location.pathname === '/GardenProject'
		) {
			navigate('/');
		}
	}, [location.pathname, navigate]);


// 15.04


  return (
    <div className="container">
      <section className={style.notfound}>
        <img src={NotFound} alt="Not found page " />
      </section>
    </div>
  );
}
