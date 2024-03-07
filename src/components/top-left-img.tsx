import Image from "next/image";

export const TopLeftImg = () => {
    return (
        <div className="w-[240px] h-[250px] lg:w-[400px] lg:h-[400px] absolute left-0 top-0">
            <Image
                src={"/top-left-img.png"}
                fill
                alt="img"
                className="mix-blend-color-dodge opacity-50 object-contain object-left-top select-none"
                draggable={false}
            />
        </div>
    );
};
