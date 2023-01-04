import {motion, useTransform} from 'framer-motion'
import './App.css'
import {useState} from "react";

const Items = [
    {
        id: 0,
        name: "Utility Nfts",
    },
    {
        id: 1,
        name: "Membership Experience",
    },
    {
        id: 2,
        name: "Web3 Dashboard",
    },
    {
        id: 4,
        name: "Community Rewards",
    },
    {
        id: 5,
        name: "Nft Loyalty Programs",
    },
    {
        id: 6,
        name: "Community Led Growth",
    },
];


const App = () => {

    const [hovered, setHovered] = useState<boolean>(false)

    console.log(hovered)

    const marqueeVariants = {
        animate: {
            x: ["0%", "-100%"],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 10,
                    ease: "linear",
                },
            },
        },
        slowAnimate:{
            x: ["0%", "-100%"],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                },
            },
        }
    };

    return (
        <div className="main">
            <div className="wrapper">
                <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="marquee">
                    <motion.div variants={marqueeVariants} animate={ hovered ? "slowAnimate" : "animate"} className="groupware">
                        {Items.map((item) => (
                            <>
                                <img
                                    alt={""}
                                    className={"h-8"}
                                    src={
                                        "data:image/png;base64,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"
                                    }
                                />
                                <div className="box" key={item.id}>
                                    {item.name}
                                </div>
                            </>

                        ))}
                    </motion.div>
                    <motion.div variants={marqueeVariants} animate={ hovered ? "slowAnimate" : "animate"} className="groupware">
                        {Items.map((item) => (
                            <>
                                <img
                                    alt={""}
                                    className={"h-8"}
                                    src={
                                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAMK0lEQVR4Xu2di3UcRRBFUQTIESBFAI4AOwJwBMgRYEeAiMAmAuQIMBGgDHAGXiKwHIGoJ7rFuGF259Oz/ay+c46OfvMp1Z2r6p6ZrT35goUMkIHRDJyQG58M3N7eniqak5OTG5+o+o4EQYz4hyBnSZCdUVhdh4IgRvgRxAhGCgVBjJggiBEMBPGDEYI8SUOsa7/o+oyICmLEHUGMYFBB/GAgiB8TKogRkxDk+wjnNC7zXhmF1XUoCGKEPwS5SHMQBDHhgiAmIBQGghjBYA7iByMEeZEqyGu/6PqMiApixD0EuUyC3H1maZ8BBGnP4D4CBDGCwRDLDwaC+DGhghgxCUF09eo2LvM+Nwqr61AQxAg/ghjBYIjlBwNB/JhQQYyYhCB/RDgfY4ilO+osBhlAEAMIOYQkiF5R+NQorK5DQRAj/AhiBIM5iB+MJIgeVnzsF12fEVFBjLiHIO8VTghybhRW16EgiBF+BDGCwRDLDwaC+DGhghgxCUFu0xALLiZcAGECQmEgiBEMhlh+MBDEjwkVxIRJajv6IYXziPajHmAQxIODhldnEcrdZd5YzkOQnUloXYeBICb4EcQERBEGgphwCUG+iVD+pIKYAGGS7gUiNY3T07xansYQ69orwj6joYKYcEcQExAMsTxBIIgnFyqICZfUNO7XFM5z2o96gEEQDw65qyKCmPDIYSCICRAqiAkI5iCeIFLb0VcpupcxxKL9qAEqKogBBIWQmsb9lML5OQS5NAmt6zAQxAQ/gpiAYIjlCaIQ5JeoIHed3lnaZoAK0jb/90dPTeN+SD+4ov2oBxgE8eCgOchVhIIgJjy4zGsGAkHMgKRwqCAmXFJPrCcpnN9pP+oBBkE8OGiIpSd5syDXtB/1AIMgHhwQxIRDGQaCmICJCqIXS+lFU1p2dFf0AIMgHhxUQfR69DMEMQHCJN0LBIJ48eAyrxmPEEQtf06pIF5gGGKZ8MhN4+7/c8UkxCS0rsMAggl+BDEBUYSBICZcEMQEBIL4gSiaxuUA6a5ogIoKYgABQQwgjISAIAZsEMQAAoL4Qih6YuVAH8eFrHe+UfcRGRXEgPOIILQfNWCDIAYQEMQAAkMsXwgjgjyLIdZb36j7iIwKYsC5aBqXI6L9qAEbBDGAgCAGEBhi+UIoWv7kQGkeZ4CMCmIAoWjYkCOi9Y8BGwQxgFC8Hj1HxOvSDdggiAGE4rUgOaKbuIr1yCC8rkNAkMb4Rx4zyVHxwGJjPgjSGEAI8n2E8NtIGFzqbcwHQRoDCEH0rlIXI2HQxLoxHwRpDKBo1lBGwzykMR8EaQgg5FAfLPXD2rfw0GJDRgjSMPkHhlc5MoZZDRkhSMPkHxhe3V/ujS90NeumYajdHhpBGqEfef5qLBquZjXihCCNEj+xeuTouKveiBOCNEj8zOqRI2Sy3oAVgjRI+szqQRVpwCgfEkGOnPyF1SNH+TIm66+PHHLXh0OQI+JPz13pnaTOFh5WV7K4orUweUs2Q5AlWVu4zcT7Hof2/jaqyLNDK/H7OhlAkDp5PLiXlUOrcv8MtQ5mvM4KCFInj3v3koZWeqQkv//H2qNqqKXGcru1O2L7/RlAkI3PkArzjrEIJYck4Q77hgwRZMPkhhyqGJqU5zfnrH00tSbV/REkqZ3ZtD8E2Six2m2lSfmhCGnucChDK36PICuSN7Zpqhyv4vcXG+z+/3Z5FT/UxJ1KUjnhCFI5oUcYVo1FrOGW2pVqbsJSKQMIUimRaUh1Fp/X3AhcG43k0JwESdZmMm2PIJUSGZXjx9jVZXzUupS7NDINszTc0rCLZWUGEGRlAtOQSo0X1J3EaZEgal9KNVlBBUFWJM+oaoz9FZJDklBNFnJGkAWJS+/n8VNs+mTB5i02QZSFWUeQiYlLQykNo374jMQo/zpEmcg7r4YgBxKWqsV3sdpFfLSegM/EO7q6RLmOD3VM4Y1C92QVQYrkpGenNHT6+oFJMXYaZFl+jxXeMan/NE0PWpB0sue/WP/9cwUYfn0WP/8qPvRZz0w9lCqxtNroMrGqisT5K33WvvT9cLn//iFLdXRB0lh+eBLqxMzL8OvhSfxlceKWJ/gQ3HAfS08StlueAQmWH3kZfl1KJvnysm+9T/Z37Mdp7gRZeNJqU/3nzcvYf2j9npN2+QnHluMZ2A1+Nfx6qox7xZSMUwTZd+IPBSklGH6PIJzmW2RgKMW+yjW1Wn2yv3tBtoh8bJ9FtRrKV1aa8ndjMu4T+Jh/Gsf6JwNj/8nL/9YfY90pQ7H/nLTHTPTR5yDH/OOKSfpYhdPPmaT/C2Zskj76H5pJ+jHP6sbHSlLpapZuCn4bHw99eKgT/0186MqVWpyWFaAxkbaHf9AVpEZq043CiwcmS5ZCLYSua+Tpoe4DQWaQTa179AzW51pVJIOqhcTI4/8ZGehvVQRZwPwzFEVi6KleqsVM3ggyM2HD1T8DUVQlJMbrFX9m15siyEr8aVJ/GbvRU75Oy9sI5jlDqXVIEGRd/u63TtVEnUxaP8tF1ajEVLtBkIrJ3LCL4tQod7EiTRumZmvCeggyIUlzVkmS/Bbb6F7KMRfdx6DLYuWMI0jlhGp36XEaTYyPNS/RpdsXzDfqw0SQ+jkdzkuujiDJmxDjYsM/o+tdI8iG+I/QZZFh1Yb8mKRvnNzBcEvvDXJW+XC7NOfQZ5aNMkAF2Sixw93yBjpHSPJGh0CQjRJb7jYkeRE/032SGotuAGp+w7JxBhBk4wQXlUSXf/UY/ZqF9wNZk72Z2yLIzIStWT1N2t/HPpbebd/FttwIXANh5rYIMjNha1dfOdRiaLUWwMztEWRmwmqsHpLoPUSezNzXLuYd5zO3YfWVGUCQlQlcsnl6laIkmbNQPeZkq9K6CFIpkXN3M7OKUD3mJrjS+ghSKZFzd5Mej9cb70xZqB5TsrTBOgiyQVKn7HLGFS2qx5SEbrQOgmyU2Cm7DUn0xK/e23Dfwn2PKcncaB0E2SixU3Y7cbKu+x7XU/bHOvUzgCD1czprjyHJh9hg7MYhw6tZ2ay/MoLUz+msPR4YZjG8mpXN+isjSP2cztrjgatZz2J4pe4kLI0ygCCNEp8Pmx6F1/NZ/7ec0yu3LSAEaZv/u6OPzENuQo5HBuF1HQKCGOAfuauuTutPDcLrOgQEMcAfglxFGGUHFCboBmwQxABCCHIZYahr/HBRT139nKVhBhCkYfLzoUeuZPH8lQEbBDGAgCAGEEZCQBADNiGIXqeu16sPFx4xMWCDIAYQRp7JQhADNghiAAFBDCAwxPKFEIKoE7y6LzLEMsNEBTEAMvK4CY+ZGLBBEAMICGIAgSGWLwQE8WVDBTFhE5LcDkOJu+iwMWADBAMICgFBTEAUYSCICRcEMQGBIJ4gQhC9aOosRcdrQUwwUUFMQBSC0KzBhAuCmIBAEBMQDLE8QRSCvIuLWI89I+0rKiqICe/iZbe83NaEC4KYgEAQExAMsTxBhCDD9y+kgphgooKYgCgaN9CwwYQLgpiAQBATEAyxPEEgiCcXKogJl6KJNS1/TLggiAmIojcWgphwQRATEAhiAoI5iCeIEORFRPYqRfcy7qTr7dlYGmeACtIYQD580TyOroomXBDEBASCmIBgiOUJAkE8uVBBTLgUzePoqmjCBUFMQCCICQiGWJ4gEMSTCxXEhEvRG+txXOZ9ZxJa12EgiAn+QhDajppwQRATEAhiAoI5iCeIEOQ0IvuQonsUQ6wbz0j7iooKYsQ7N4+j7agPFATxYXHffhRBfKAgiA8LBDFikUNBECMoqTfWF1FBzo3C6joUBDHCjyBGMFIoCGLEBEGMYCCIH4wQRG/kqc7uT/2i6zMiKogR99RdUXMQBDHhgiAmIBQGghjBYIjlByO1Hz2lgviwoYL4sFAFuVIhCUGeG4XVdSgIYoQfQYxgMMTyg4EgfkyoIEZMUvM4XcW6NAqr61AQxAg/ghjBYIjlBwNB/JhQQYyYpPajGmLRdtSEC4KYgEg3Ci/0OQTR5V4WgwwgiAGEHELqroggRkwQxAhGEkQPK741CqvrUBDECH9qHqcKcm0UVtehIIgRfgQxgsFlXj8YCOLHhApixCQ1j9MQa2cUVtehIIgRfgQxgsEQyw8GgvgxoYIYMUntRzXEou2oCRcEMQFBGJ4Z+BvRcwYFjuD7UwAAAABJRU5ErkJggg=="
                                    }
                                />
                                <div className="box" key={item.id}>
                                    {item.name}
                                </div>
                            </>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default App;
