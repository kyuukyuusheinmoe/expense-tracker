import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Button } from "primereact/button";

const useIntersection = () => {
	const [intersecting, setIntersecting] = useState(false);
	const [element, setElement] = useState();
	useEffect(() => {
		if (!element) return;
		const observer = new IntersectionObserver((entries) => {
			setIntersecting(entries[0]?.isIntersecting);
		});
		observer.observe(element);
		return () => observer.unobserve(element);
	}, [element]);
	return [intersecting, (el) => el && setElement(el)];
};

const InfiniteScroll =(props) => {
	const {
		swr,
		swr: { setSize, data, isValidating, isLoading },
		children,
		endingIndicator = "No more item",
		loadingIndicator = "Loading...",
		isReachingEnd,
		indicatorClassName = "",
		dataWrapper: DataWrapper,
		isAutoInfinite = true,
	} = props;

	const [intersecting, ref] = useIntersection();

	const ending = typeof isReachingEnd === "function" ? isReachingEnd(swr) : isReachingEnd;

	useEffect(() => {
        console.log ('xxx intersecting ', intersecting)
		if (intersecting && !isValidating && !ending) {
			setSize((size) => size + 1);
		}
	}, [intersecting, isValidating, setSize, ending]);

    console.log ('xxx data ', data)
	return (
		<>
			<DataWrapper>
				{typeof children === "function" ? data?.map((item) => item.data.map (d => children(d))) : children}
				{isAutoInfinite && !isLoading && (
					<div className="relative flex flex-col items-center col-span-full">
						<div ref={ref} className="absolute" />
						<div className={clsx("absolute mx-auto", indicatorClassName)}>
							{ending ? endingIndicator : loadingIndicator}
						</div>
					</div>
				)}
			</DataWrapper>
			{!ending && !isAutoInfinite && (
				<div className="hidden sm:block">
					<Button
						onClick={() => setSize((prev) => prev + 1)}
						outlined
						className="self-center !mt-8 !px-16 "
						disabled={isLoading}
					>
						{isLoading ? loadingIndicator : "Load more"}
					</Button>
				</div>
			)}
		</>
	);
};

export default InfiniteScroll;
