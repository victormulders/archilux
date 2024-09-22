'use client';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './styles.module.scss';
import LivingRoom from '/public/img/living-room.jpg';
import RoomOne from '/public/img/room-image-1.webp';
import RoomTwo from '/public/img/room-image-2.jpeg';
import RoomFour from '/public/img/living-room-4.jpg';
import RoomFive from '/public/img/living-room-5.jpg';
import RoomSix from '/public/img/living-room-6.jpg';
import SimpleLivingRoom from "/public/img/simple-living-room.jpg";
import Image from 'next/image';
import FloatingTitle from '@/app/components/FloatingTitle';

export default function ZoomParallax() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
        {
            src: LivingRoom,
            scale: scale4
        },
        {
            src: RoomOne,
            scale: scale5
        },
        {
            src: RoomSix,
            scale: scale6
        },
        {
            src: RoomTwo,
            scale: scale5
        },
        {
            src: RoomFour,
            scale: scale6
        },
        {
            src: RoomFive,
            scale: scale8
        },
        {
            src: SimpleLivingRoom,
            scale: scale9
        }
    ]

    return (
      <div ref={container} className={styles.container}>
        <div className={styles.sticky}>
          {pictures.map(({ src, scale }, index) => {
            return (
              <motion.div key={index} style={{ scale }} className={styles.el}>
                <div className={styles.imageContainer}>
                  <Image src={src} fill alt="image" placeholder="blur" />
                    {index === 0 &&
                        <FloatingTitle className={styles.title}>More than just a room.</FloatingTitle>
                    }
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
}
