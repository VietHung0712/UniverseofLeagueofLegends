import { memo, useEffect, useState, useRef } from "react";
import { animationSlide, scrollHorizontal } from "../../utils/functions";
import styles from "./style.module.css";

const AltSpiritBlossomPage = () => {
    useEffect(() => {
        document.title = "Spirit Blossom - Universe of League of Legends";
    });

    return (
        <main id={styles.main}>
            <Hero />
            <Lore />
            <Video title={"Kin of the Stained Blade"} src={"https://www.youtube.com/embed/D4L0OkSrsI8?si=PS1Vew6w9PfdW1rd"} />
            <Slide />
            <Video title={"The Path, An Ionia Myth"} src={"https://www.youtube.com/embed/u9fFG4ZLp9Y?si=wMO2f8yPtPjVDGRk"} />
            <Gallery />
        </main>
    )
}

const Hero = () => {
    return (
        <section id={styles.hero}>
            <div>
                <img className="position-absolute top-0 start-0 object-fit-cover h-100 w-100"
                    src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Poster/103430368bf1d6837046b72dc57a9039e919a165-1600x556.avif" alt="" />
            </div>
        </section>
    )
}

const Lore = () => {
    return (
        <section id={styles.lore}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-lg-10 col-xl-8 m-auto">
                        <p>
                            The Spirit Blossom Festival is an ancient and celebrated time in Ionia, when the door to the spirit world is opened, the dead return to their loved ones, and spirits of all manner turn their eyes towards the living. From the benevolent Kanmei, to the obsessive Akana—their stories play out again and again, like shadows on a paper lantern.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Video = ({ title, src }) => {
    return (
        <section id={styles.video}>
            <div className="container py-md-5">
                <div className="row">
                    <div className="col-12 py-md-5">
                        <h2 className={styles.title}>{title}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 m-auto">
                        <div className={styles.video}>
                            <iframe width="100%" height="100%" className="position-absolute start-0 top-0"
                                src={src}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Slide = () => {

    const slideRef = useRef();
    const [firstSpirit] = useState([
        {
            name: "Karma",
            lore: "Long ago, the First Spirit of the Lands shaped two sisters—born together, yet bound by different fates. For a time, she watched over them, but when her gaze turned elsewhere, one strayed, creating twisted life in monstrous masks. Faced with the cost of her neglect, the First Spirit vowed never to turn away again, binding herself to endless rebirth.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/K/Karma/Karma_16.jpg",
        },
    ])

    const [akana_kanmei] = useState([
        {
            name: "Kindred",
            lore: "In Ionian tradition, the spirits of Lamb and Wolf wear a different guise: that of the Taker, a child who appears at the end of all things, and her beloved Beast. Together, the two frolic and play until called to perform their duties. They do not know where they came from, but it is said they feel loss for someone they knew long ago…",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/K/Kindred/Kindred_3.jpg",
        }, {
            name: "Sett",
            lore: "Kanmei are peaceful spirits, while akana wander in perpetuity. Yet legend tells of a spirit of both worlds—akana and kanmei—at odds with himself. The spirit enjoyed eternal bliss until, spurned by his father, he sought vengeance. Now the Banished Son searches among the slain for worthy warriors with whom to spar, preparing for his greatest fight yet.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/S/Sett/Sett_7.jpg",
        },
    ])
    const [kanmei] = useState([
        {
            name: "Ahri",
            lore: "Some believe the Gatekeeper takes the shape of a fox. Some see other animals—but her role in all tales remains the same. A capricious, whimsical spirit who treats the fates of the living as a game of chase, she offers a path to salvation for souls who seek their final rest… but she will not intervene should they stray.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/A/Ahri/Ahri_16.jpg",
        }, {
            name: "Yasuo",
            lore: "Pride once set the First Lands aflame, as recounted in the Tale of the Warring Brothers. The Younger was a roguish yet respected lord, until he was accused of crimes against his people and took up arms to defend his reputation. Both brothers fell in their final clash—a fatal lesson in hubris.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/Y/Yasuo/Yasuo_9.jpg",
        }, {
            name: "Aphelios",
            lore: "Twin spirits herald the day's end in one version of an old Ionian tale. They are brother Midnight and sister Moonlight, two sides of a heavenly coin. Night breaks beneath the brother's shroud, cast across the firmament, a pitch-black canvas upon which his luminous sister dances as she trails a veil of stars.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/A/Aphelios/Aphelios_3.jpg"
        }, {
            name: "Ashe",
            lore: "Myth tells of the Wandering Queen, whose curiosity led her to trade places with the Grovemother. The cost of this choice was high, and she returned to see her loyal Ready Hand and the Grovemother locked in combat. Throwing herself between them, she died in the Ready Hand's arms, her final words an apology. Now she roams the wilds, guiding the lost.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/A/Ashe/Ashe_22.jpg"
        }, {
            name: "Bard",
            lore: "It is said that the Keeper of the Garden drifts among the flowers, gathering wayward memories left behind by travelers who wished to forget their pain. Though some are not yet ready to settle, the sprites of memory remain safe in the Keeper's care.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/B/Bard/Bard_8.jpg",
        }, {
            name: "Evelynn",
            lore: "Mortals burdened by pain and fear may pray to the Sorrow Eater to alleviate their burdens. But every gift comes at a price. One tale recounts a woman whose weighty emotions had made her the prey of demonkin. The Sorrow Eater offered to dine freely on her desires and memories—and when she was sated, the woman was at peace, free of pain…and of feeling.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/E/Evelynn/Evelynn_11.jpg",
        }, {
            name: "Ivern",
            lore: "When the Wandering Queen died, she was buried beneath the tree planted on the day she was born—a tree said to watch over her for all her days. She awoke in a world beyond, clutching one of its branches, which she shaped into a sacred bow. As the branch bloomed, the guardian tree revealed its spirit—a friend who'd been with her all along.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/I/Ivern/Ivern_5.jpg",
        }, {
            name: "Kayle",
            lore: "The First Spirit shaped two sisters—one from the sturdy bough of a tree, the other from its ephemeral bloom—and named them the Branchwardens. The first was steadfast and just. The second, powerful but troubled, crafted demonic children, forcing the maker to bind them to a grove. With her sister sealed away, the Branchwarden stands, forever watchful.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/K/Kayle/Kayle_16.jpg",
        }, {
            name: "Lux",
            lore: "When a kind young woman freed a trapped creature—a spirit in disguise—she was offered a single treasure. Among dazzling riches, she chose a plain gray stone, told it could help many. It was no stone at all, but a shell with two glowing pearls. In her hands, they became a staff of light, a gift the Lady of Pearls now uses to guide others through darkness.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/L/Lux/Lux_25.jpg",
        }, {
            name: "Nidalee",
            lore: "The Tale of the Wise Cat is told in many ways across Ionia, but all begin the same: “There once was a cat who lived far beyond her years...” Though age brought power, allowing her to shift form between feline and mortal, her questions only deepened. She searched for answers, unaware that the wisdom she yearned for had always lived within.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/N/Nidalee/Nidalee_15.jpg",
        }, {
            name: "Syndra",
            lore: "Those who seek freedom may offer prayers to the Fluttering Joy, a savior of lost souls. One story recounts a tree that wrapped its roots around a wandering wisp. The wisp struggled in vain, until the spirit tore away the roots that bound it tight. She watched as the wisp tasted freedom again—a blessing she is said to bestow upon all she meets.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/S/Syndra/Syndra_10.jpg",
        }, {
            name: "Teemo",
            lore: "A lover of tricks both benign and onerous, the Prankster King has graced Ionian fables for millennia. In villages that border enchanted woods, mothers warn their children not to wander far, lest this mischievous spirit will twist their paths away from home. If you are naughty, they whisper, he may even swap your feet inside your shoes!",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/T/Teemo/Teemo_11.jpg",
        }, {
            name: "Yone",
            lore: "Pride once set the First Lands aflame, as recounted in the Tale of the Warring Brothers. The Elder was a lord who upheld tradition and duty in serving his people, until he was forced to confront his own kin. Both brothers fell in their final clash—a fatal lesson in hubris.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/Y/Yone/Yone_1.jpg",
        }, {
            name: "Zyra",
            lore: "Once, there was a woman with a broken heart who longed to forget her sorrow. A powerful spirit, moved by her plight, granted her wish. The woman's tears turned to blossoms, her body took root, and the Garden of Forgetting was born. Now, weary hearts wander into its embrace, hoping the blooms will ease their grief.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/Z/Zyra/Zyra_12.jpg",
        }
    ]);

    const [akana] = useState([
        {
            name: "Akali",
            lore: "A young warrior's master warned her of the world's cruelty and the dispassion it required, then told her to cut out her heart. But when she raised the blade, she could not do it. She would face the world, heart intact. She ran, seeking a new path, and found the Burning Shade—a master who did not demand her heart, but destroyed it all the same.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/A/Akali/Akali_20.jpg",
        }, {
            name: "Alune",
            lore: "Twin spirits herald the day's end in one version of an old Ionian tale. They are brother Midnight and sister Moonlight, two sides of a heavenly coin. Night breaks beneath the brother's shroud, cast across the firmament, a pitch-black canvas upon which his luminous sister dances as she trails a veil of stars.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/A/Alune/Alune_SpiritBlossom.jpg",
        }, {
            name: "Cassiopeia",
            lore: "There once was a princess as clever as she was beautiful, who harbored a bitter feud with her sister. Convinced she was the rightful heir to the throne, she tried to poison her rival—but instead, serpent scales bloomed across her soft skin. The Alluring Serpent disappeared that night into the mountains, but the faithful still seek her counsel to this day.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/C/Cassiopeia/Cassiopeia_6.jpg",
        }, {
            name: "Darius",
            lore: "A soldier claimed a magical axe among his spoils of war. The axe gave him great strength, and he decimated his enemy before he was ignobly struck down. But the axe would not let him rest—it demanded more bloodshed. Risen again as a raging spirit, the Axeman is cursed to stalk the fields where great soldiers have fallen, thirsting for the thrill of battle.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/D/Darius/Darius_11.jpg",
        }, {
            name: "Hwei",
            lore: "It is said, the Artist roams—obsessed with the soul's liminal space, where light and dark collide. He wields kanmei and akana essence to reveal the heart of those he paints. Chancing upon a divine temple, he painted its guardian Archer. But the portrait twisted into pure rage—a lesson to be true to oneself, lest the Artist expose what lies beneath.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/H/Hwei/Hwei_2.jpg",
        }, {
            name: "Irelia",
            lore: "The Ready Hand was a devoted bodyguard to the Wandering Queen. Yet when her duty to protect was eclipsed by a desire to see her queen happy, calamity followed. The kingdom fell, and the queen died in her arms. Now, as an akana spirit, the Ready Hand roams the endless night, burdened by regret.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/I/Irelia/Irelia_18.jpg",
        }, {
            name: "Lillia",
            lore: "According to legend, a fawn and a caretaker served faithfully side by side as the guardians of a sacred forest. But the woods were set aflame and reduced to ash. Consumed by loss, the Timid Fawn is said to roam the land, reliving the destruction in her dreams—slowly awakening to the hope that slumbers within her, still waiting to bloom.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/L/Lillia/Lillia_1.jpg",
        }, {
            name: "Master Yi",
            lore: "The Lonely Master took but one apprentice in his lifetime and poured all of his wisdom into him, believing he had found a successor. When his student betrayed him, however, the Lonely Master perished—not by the blade, but from a broken heart. Thus he was doomed to search forever in vain for his lost pupil—the sole heir to his legacy.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/M/MasterYi/MasterYi_16.jpg",
        }, {
            name: "Morgana",
            lore: "Twins, born of branch and bloom, guarded mortals from afar. But one sister yearned to feel as mortals do, and from this hunger made masked, demonic children—becoming the Grovemother. She traded places with a queen of nearby lands… but her children followed, bringing ruin and death. Now imprisoned in her grove, she still longs for the fullness of emotion.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/M/Morgana/Morgana_18.jpg",
        }, {
            name: "Riven",
            lore: "A blademaster of old was famed for cutting down hundreds in battle without mercy. But her sword remembered every life taken—and when she swung at what would be her final enemy, the weeping blade shattered, taking the Restless Warrior with it. Her spirit is said to still scour the world for the blade's lost pieces, haunted by her own bloody legacy.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/R/Riven/Riven_14.jpg",
        }, {
            name: "Soraka",
            lore: "Long ago, a star shone above the First Lands, smiling as she gently lit the world below. But a stone giant envied the star's light, and tore her from the heavens. Heartbroken, the star plummeted to the earth. It is said to this day that the Stolen Star walks among mortals, bestowing her radiance upon them—a beac",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/S/Soraka/Soraka_14.jpg",
        }, {
            name: "Thresh",
            lore: "Ionians often speak of the Soul Collector in hushed warnings—for it is he, this obsessive spirit, whom they believe tempts the dead away from their path to salvation. “Beware his greed,” they say, for those he finds and entraps will be locked away for eternity, baubles in his prized collection of souls.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/T/Thresh/Thresh_9.jpg",
        }, {
            name: "Tristana",
            lore: "Those who seek glory, or something akin / Little Laughing Luck will greet with a grin / She harbors no favorites, no motives to name / All are equal when playing her game / An unfruitful harvest, the farmers attest / Has no better spirit than her to redress / But steady your hand, or pay a great price / For fortunes can change with a roll of the dice…",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/T/Tristana/Tristana_14.jpg",
        }, {
            name: "Varus",
            lore: "As guardian of a peaceful temple, the Archer welcomed a wandering Artist, allowing him to shelter with his beloved monks. But when the Artist painted him, the sorcerous portrait leapt from the canvas and ravaged the temple. The Archer's grief hardened to fury. Now, he hunts the wicked Artist, hoping to bring peace to those he could not save.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/V/Varus/Varus_16.jpg",
        }, {
            name: "Vayne",
            lore: "It is said the Lone Huntress took up arms against the demonkin she believed responsible for ending her bloodline. She pursued the monster, slaughtering all in her path, until her body gave out and her wrathful spirit continued the chase. To this day, she is said to still hunt—blinded to the truth that she has in turn become a monster, marred by revenge.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/V/Vayne/Vayne_12.jpg",
        }, {
            name: "Yorick",
            lore: "The Ashen Caretaker was once a man who, alongside a timid fawn, tended to a sacred forest with the utmost care—until it burned to the ground before his eyes. His heart, too, crumbled to ash, for it had forgotten death gives rise to new blooms. Now the flowers he tends seem to blister in flames unseen, his gardeners now howling creatures of the night.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/Y/Yorick/Yorick_7.jpg",
        }, {
            name: "Yunara",
            lore: "Unwavering in her devotion to  Ionia, An icon representing Yunara Yunara has spent centuries cloistered away in the spirit realm honing her skills with the An icon for Yunara's ability Cultivation of Spirit Aion Er'na, a legendary  Kinkou relic. Despite all she has sacrificed, Yunara's vow to rid the land of disharmony and strife remains unbroken, as does her faith. But the world that now awaits her—and the shadow of an ancient threat risen once more—will test every ounce of her resolve.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/Y/Yunara/Yunara_0.jpg",
        }, {
            name: "Zed",
            lore: "Legend speaks of the Burning Shade, a warrior who sacrificed himself for a noble cause, only to see his allies fall. Believing his sacrifice meaningless, grief consumed his soul until all that remained was shadow and rage. Now, he haunts wayward warriors, sparking fires in their hearts until they, too, join him as clones of smoke and shade.",
            url: "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Splash_Art/Z/Zed/Zed_16.jpg",
        },
    ])

    const handleSlide = (dir) => {
        const slide = slideRef.current;
        animationSlide(slide, dir);
    }

    return (
        <section id={styles.slide}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 py-md-5">
                        <img width={80} height={80} className="object-fit-contain m-auto d-block" src="https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Logo/Spirit_Blossom_Logo_2.png" alt="" />
                        <h2 className={styles.title}>Spirit Blossom</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 m-auto">
                        <div className={styles.ctr__body}>
                            <div className={styles.slide} ref={slideRef}>
                                {
                                    firstSpirit?.map((item, key) => (
                                        <div key={key} className={styles.item} style={{ backgroundImage: `linear-gradient(to right, #000000ab, transparent, transparent), url(${item.url})` }}>
                                            <div className={styles.content}>
                                                <div className={styles.name}>{item.name}</div>
                                                <div className={styles.des}>{item.lore}</div>
                                            </div>
                                        </div>
                                    ))
                                }
                                {
                                    kanmei?.map((item, key) => (
                                        <div key={key} className={styles.item} style={{ backgroundImage: `linear-gradient(to right, #000000ab, transparent, transparent), url(${item.url})` }}>
                                            <div className={styles.content}>
                                                <div className={styles.name}>{item.name}</div>
                                                <div className={styles.des}>{item.lore}</div>
                                            </div>
                                        </div>
                                    ))
                                }
                                {
                                    akana?.map((item, key) => (
                                        <div key={key} className={styles.item} style={{ backgroundImage: `linear-gradient(to right, #000000ab, transparent, transparent), url(${item.url})` }}>
                                            <div className={styles.content}>
                                                <div className={styles.name}>{item.name}</div>
                                                <div className={styles.des}>{item.lore}</div>
                                            </div>
                                        </div>
                                    ))
                                }
                                {
                                    akana_kanmei?.map((item, key) => (
                                        <div key={key} className={styles.item} style={{ backgroundImage: `linear-gradient(to right, #000000ab, transparent, transparent), url(${item.url})` }}>
                                            <div className={styles.content}>
                                                <div className={styles.name}>{item.name}</div>
                                                <div className={styles.des}>{item.lore}</div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div>
                                <button onClick={() => handleSlide(0)} className={styles.btnPrev} style={{ backgroundImage: `url(https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/prev.png)` }}></button>
                                <button onClick={() => handleSlide(1)} className={styles.btnNext} style={{ backgroundImage: `url(https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/next.png)` }}></button>
                                <button onClick={() => handleSlide(1)} className={styles.btnNextPc}></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Gallery = () => {

    const ref = useRef();
    const [isShow, setIsShow] = useState(false);
    const [gallerys] = useState([
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_art_1.jpg",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_art_2.webp",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_art_3.jpg",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_art_4.jpg",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Poster/Spirit_Blossom_Poster.jpg",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_0.webp",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_1.webp",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_2.webp",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_3.webp",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_4.jpg",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_5.jpg",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_6.png",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_7.webp",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_8.jpg",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_9.webp",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_10.jpg",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_11.webp",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_12.webp",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_13.webp",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_14.webp",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_15.webp",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_16.png",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_17.webp",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_18.webp",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_19.jpg",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_20.webp",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_21.png",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_22.png",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_23.webp",
        "https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/SpiritBlossom/Image/Promo/Spirit_Blossom_promo_24.jpg",
    ]);

    useEffect(() => {
        if (ref.current) scrollHorizontal(ref.current, 3);
    }, []);

    const handleShow = (value) => {
        setIsShow(value);
    }

    return (
        <section id={styles.gallery}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 py-md-5">
                        <h2 className={styles.title}>Gallery // Wallpapers</h2>
                    </div>
                </div>
                <div className="row row-gap-4 justify-content-center">
                    {
                        (isShow ? gallerys : gallerys?.slice(0, 4))?.map((item, key) => (
                            <div key={key} className={`col-6 col-md-3`}>
                                <div className={styles.gallery__item}>
                                    <a href={item} target="_blank" rel="noopener noreferrer"
                                        className="position-absolute top-0 start-0 h-100 w-100 d-block">
                                        <img className="h-100 w-100 object-fit-cover" src={item} alt="" loading="lazy" />
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="row py-5">
                    <div className="col-12">
                        <button onClick={() => handleShow(!isShow)} className={`${styles.btn} ${isShow ? styles.close : ''}`} style={{ backgroundImage: `url(https://raw.githubusercontent.com/VietHung0712/AssetsLOL/refs/heads/main/Others/prev.png)` }}></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(AltSpiritBlossomPage);