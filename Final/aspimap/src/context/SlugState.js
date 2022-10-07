import React, { useState } from "react";
import slugContext from "./slugContext";

const SlugState = (props) => {
  const category = {
    sight: [
      {
        lat: 27.1767,
        lng: 78.0081,
        name: "Agra",
        img: " https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80 ",
        tag: "Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh, about 210 kilometres south of the national capital New Delhi and 335 km west of the state capital Lucknow.",
      },
      {
        lat: 23.4873,
        lng: 77.7418,
        name: "Sanchi",
        img: " https://images.unsplash.com/photo-1585744944048-846da0c3054c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FuY2hpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60 ",
        tag: "Sanchi Town is a Nagar panchayat in Raisen District of the state of Madhya Pradesh, India, it is located 46 km north east of Bhopal, and 10 km from Besnagar or Vidisha in the central part of the state of Madhya Pradesh.",
      },
      {
        lat: 22.5726,
        lng: 88.3639,
        name: "Kolkata",
        img: " https://images.unsplash.com/photo-1571679654681-ba01b9e1e117?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a29sa2F0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 ",
        tag: "Kolkata (formerly Calcutta) is the capital of India's West Bengal state. Founded as an East India Company trading post, it was India's capital under the British Raj from 1773–1911. Today it’s known for its grand colonial architecture, art galleries and cultural festivals. It’s also home to Mother House, headquarters of the Missionaries of Charity, founded by Mother Teresa, whose tomb is on site",
      },
      {
        lat: 8.0883,
        lng: 77.5385,
        name: "Kanyakumari",
        img: " https://images.unsplash.com/photo-1573043576848-56250cd36770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8a2FueWFrdW1hcml8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60 ",
        tag: "Kanyakumari is a coastal town in the state of Tamil Nadu on India's southern tip. Jutting into the Laccadive Sea, the town was known as Cape Comorin during British rule and is popular for watching sunrise and sunset over the ocean. It's also a noted pilgrimage site thanks to its Bagavathi Amman Temple, dedicated to a consort of Shiva, and its Our Lady of Ransom Church, a center of Indian Catholicism.",
      },
    ],
    family: [
      {
        lat: 30.7346,
        lng: 79.0669,
        name: "Kedarnath",
        img: " https://images.unsplash.com/photo-1612438214708-f428a707dd4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2VkYXJuYXRofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60 ",
        tag: "Kedarnath is a town in Rudraprayag district in the state of Uttarakhand in India and has gained importance because of the Kedarnath Temple. It is approximately 86 kilometres from Rudraprayag, the district headquarter. It is a Nagar panchayat in the Rudraprayag district",
      },
      {
        lat: 33.0308,
        lng: 74.949,
        name: "Vaishnodevi",
        img: " https://images.unsplash.com/photo-1565153402783-966d61bff402?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGthdHJhJTIwdGVtcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60 ",
        tag: 'Vaishno Devi is a folk manifestation of the Hindu Mother Goddess, Devi. The words "Maa" and "Mata" are commonly used in India for mother, and thus are often heavily used in connection with Vaishno Devi. Vaishnavi was formed from the combined energies of Parvati, Lakshmi, and Saraswati',
      },
      {
        lat: 25.3176,
        lng: 82.9739,
        name: "Varanasi",
        img: " https://images.unsplash.com/photo-1565354785692-9e7523e5a87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmFyYW5hc2l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60 ",
        tag: "Varanasi is a city in the northern Indian state of Uttar Pradesh dating to the 11th century B.C. Regarded as the spiritual capital of India, the city draws Hindu pilgrims who bathe in the Ganges River’s sacred waters and perform funeral rites. Along the city's winding streets are some 2,000 temples, including Kashi Vishwanath, the “Golden Temple,” dedicated to the Hindu god Shiva. ",
      },
      {
        lat: 25.4358,
        lng: 81.8463,
        name: "Prayagraj",
        img: " https://images.unsplash.com/photo-1585484173186-5f2df1a5ef34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHByYXlhZ3JhanxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 ",
        tag: "Allahabad, officially known as Prayagraj, also known as Ilahabad, is a metropolis in the Indian state of Uttar Pradesh. It is the administrative headquarters of the Allahabad district—the most populous district in the state and 13th most populous district in India—and the Allahabad division.",
      },
      {
        lat: 31.634,
        lng: 74.8723,
        name: "Amritsar",
        img: " https://media.istockphoto.com/photos/amritsar-golden-temple-india-picture-id163349148?b=1&k=20&m=163349148&s=170667a&w=0&h=Qh7Up7wFWGC8dfMTPlyeujXQpvgbcTUTgAXs627GhM4= ",
        tag: "Amritsar is a city in the northwestern Indian state of Punjab, 28 kilometers from the border with Pakistan. At the center of its walled old town, the gilded Golden Temple (Harmandir Sahib) is the holiest gurdwara (religious complex) of the Sikh religion. It’s at the end of a causeway, surrounded by the sacred Amrit Sarovar tank (lake), where pilgrims bathe",
      },
      {
        lat: 13.0827,
        lng: 80.2707,
        name: "Chennai",
        img: " https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlbm5haXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 ",
        tag: "Chennai, on the Bay of Bengal in eastern India, is the capital of the state of Tamil Nadu. The city is home to Fort St. George, built in 1644 and now a museum showcasing the city’s roots as a British military garrison and East India Company trading outpost, when it was called Madras. Religious sites include Kapaleeshwarar Temple, adorned with carved and painted gods, and St. Mary’s, a 17th-century Anglican church.",
      },
    ],
    urban: [
      {
        lat: 19.076,
        lng: 72.8777,
        name: "Mumbai",
        img: " https://images.unsplash.com/photo-1595658658481-d53d3f999875?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bXVtYmFpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60 ",
        tag: "Mumbai (formerly called Bombay) is a densely populated city on India’s west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. Offshore, nearby Elephanta Island holds ancient cave temples dedicated to the Hindu god Shiva. The city's also famous as the heart of the Bollywood film industry.",
      },
      {
        lat: 30.7333,
        lng: 76.7794,
        name: "Chandigarh",
        img: " https://images.unsplash.com/photo-1588669494151-f4c6df6f715b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhbmRpZ2FyaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 ",
        tag: "Chandigarh, the capital of the northern Indian states of Punjab and Haryana, was designed by the Swiss-French modernist architect, Le Corbusier. His buildings include the Capitol Complex with its High Court, Secretariat and Legislative Assembly, as well as the giant Open Hand Monument. The nearby Rock Garden is a park featuring sculptures made of stones, recycled ceramics and industrial relics.",
      },
      {
        lat: 12.9716,
        lng: 77.5946,
        name: "Bangalore",
        img: " https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuZ2Fsb3JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60 ",
        tag: "Bengaluru (also called Bangalore) is the capital of India's southern Karnataka state. The center of India's high-tech industry, the city is also known for its parks and nightlife. By Cubbon Park, Vidhana Soudha is a Neo-Dravidian legislative building. Former royal residences include 19th-century Bangalore Palace, modeled after England’s Windsor Castle, and Tipu Sultan’s Summer Palace, an 18th-century teak structure.",
      },
      {
        lat: 17.385,
        lng: 78.4867,
        name: "Hyderabad",
        img: " https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuZ2Fsb3JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60 ",
        tag: "Hyderabad is the capital of southern India's Telangana state. A major center for the technology industry, it's home to many upscale restaurants and shops. Its historic sites include Golconda Fort, a former diamond-trading center that was once the Qutb Shahi dynastic capital. The Charminar, a 16th-century mosque whose 4 arches support towering minarets, is an old city landmark near the long-standing Laad Bazaar.",
      },
      {
        lat: 28.4595,
        lng: 77.0266,
        name: "Gurugaon",
        img: " https://images.unsplash.com/photo-1589829973523-e4ddcbbd40e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGd1cnVncmFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60 ",
        tag: "Gurgaon is a city just southwest of New Delhi in northern India. It’s known as a financial and technology hub. The Kingdom of Dreams is a large complex for theatrical shows. Sheetala Mata Mandir is an orange-and-white-striped Hindu temple. The Vintage Camera Museum showcases cameras and prints spanning a century. West of the city, Sultanpur National Park is home to hundreds of bird species",
      },
    ],
    budget: [
      {
        lat: 32.01,
        lng: 77.315,
        name: "Kasol",
        img: " https://images.unsplash.com/photo-1581791534721-e599df4417f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2Fzb2x8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60 ",
        tag: "Kasol is a hamlet in the Kullu district of the Indian state of Himachal Pradesh. It is situated in Parvati Valley, on the banks of the Parvati River, on the way between Bhuntar and Manikaran",
      },
      {
        lat: 11.9416,
        lng: 79.8083,
        name: "Pondicherry",
        img: " https://images.unsplash.com/photo-1624257146471-78ea613e1649?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9uZGljaGVycnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60 ",
        tag: "Pondicherry (or Puducherry), a French colonial settlement in India until 1954, is now a Union Territory town bounded by the southeastern Tamil Nadu state. Its French legacy is preserved in its French Quarter, with tree-lined streets, mustard-colored colonial villas and chic boutiques. A seaside promenade runs along the Bay of Bengal and passes several statues, including a 4m-high Gandhi Memorial.",
      },
      {
        lat: 15.2993,
        lng: 74.124,
        name: "Goa",
        img: " https://images.unsplash.com/photo-1621446665906-32133bb34dc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80 ",
        tag: "Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda. ",
      },
      {
        lat: 29.3919,
        lng: 79.4542,
        name: "Nainital",
        img: " https://images.unsplash.com/photo-1620902459224-c4bb00278144?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmFpbml0YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60 ",
        tag: "Nainital is a Himalayan resort town in the Kumaon region of India’s Uttarakhand state, at an elevation of roughly 2,000m. Formerly a British hill station, it’s set around Nainital Lake, a popular boating site with Naina Devi Hindu Temple on its north shore. A cable car runs to Snow View observation point (at 2,270m), with vistas over the town and mountains including Nanda Devi, Uttarakhand’s highest peak.",
      },
    ],
    art: [
      {
        lat: 24.6637,
        lng: 93.9063,
        name: "Manipur",
        img: " https://images.unsplash.com/photo-1587635861480-414767bd0198?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuaXB1cnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 ",
        tag: "Manipur is a state in Northeast India, with the city of Imphal as its capital. It is bounded by the Indian states of Nagaland to the north, Mizoram to the south and Assam to the west. It also borders two regions of Myanmar, Sagaing Region to the east and Chin State to the south.",
      },
      {
        lat: 26.2006,
        lng: 92.9376,
        name: "Assam",
        img: " https://images.unsplash.com/photo-1589882485484-c073e3742e60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXNzYW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60 ",
        tag: "Assam is a state in northeastern India known for its wildlife, archeological sites and tea plantations. In the west, Guwahati, Assam’s largest city, features silk bazaars and the hilltop Kamakhya Temple. Umananda Temple sits on Peacock Island in the Brahmaputra river. The state capital, Dispur, is a suburb of Guwahati. The ancient pilgrimage site of Hajo and Madan Kamdev, the ruins of a temple complex, lie nearby.",
      },
      {
        lat: 33.2778,
        lng: 75.3412,
        name: "Jammu And Kashmir",
        img: " https://images.unsplash.com/photo-1595815771614-ade9d652a65d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFtbXUlMjBhbmQlMjBrYXNobWlyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60 ",
        tag: "Jammu and Kashmir is a region administered by India as a union territory and consisting of the southern portion of the larger Kashmir region, which has been the subject of a dispute between India and Pakistan since 1947, and between India and China since 1962",
      },
      {
        lat: 27.1767,
        lng: 78.0081,
        name: "Agra",
        img: " https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80 ",
        tag: "Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh, about 210 kilometres south of the national capital New Delhi and 335 km west of the state capital Lucknow.",
      },
      {
        lat: 26.9124,
        lng: 75.7873,
        name: "Jaipur",
        img: " https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amFpcHVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60 ",
        tag: "Jaipur is the capital of India’s Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City, or “Pink City” for its trademark building color. At the center of its stately street grid (notable in India) stands the opulent, colonnaded City Palace complex. With gardens, courtyards and museums, part of it is still a royal residence.",
      },
    ],
    hills: [
      {
        lat: 34.0837,
        lng: 74.7973,
        name: "Srinagar",
        img: " https://images.unsplash.com/photo-1557116946-5797470c5d0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fHNyaW5hZ2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60 ",
        tag: "Srinagar is the largest city and the summer capital of Jammu and Kashmir, India. It lies in the Kashmir Valley on the banks of the Jhelum River, a tributary of the Indus, and Dal and Anchar lakes. The city is known for its natural environment, gardens, waterfronts and houseboats.",
      },
      {
        lat: 32.2432,
        lng: 77.1892,
        name: "Manali",
        img: " https://images.unsplash.com/photo-1593181629936-11c609b8db9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFuYWxpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60 ",
        tag: "Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination. Set on the Beas River, it’s a gateway for skiing in the Solang Valley and trekking in Parvati Valley. It's also a jumping-off point for paragliding, rafting and mountaineering in the Pir Panjal mountains, home to 4,000m-high Rohtang Pas",
      },
      {
        lat: 32.01,
        lng: 77.315,
        name: "Kasol",
        img: " https://images.unsplash.com/photo-1588226682474-b844df6389be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80 ",
        tag: "Kasol is a hamlet in the Kullu district of the Indian state of Himachal Pradesh. It is situated in Parvati Valley, on the banks of the Parvati River, on the way between Bhuntar and Manikaran.",
      },
      {
        lat: 27.533,
        lng: 88.5122,
        name: "Sikkim",
        img: " https://images.unsplash.com/photo-1600402808924-9c591a6dace8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80 ",
        tag: "Sikkim is a state in northeast India, bordered by Bhutan, Tibet and Nepal. Part of the Himalayas, the area has a dramatic landscape that includes India’s highest mountain, 8,586m Kangchenjunga. Sikkim is also home to glaciers, alpine meadows and thousands of varieties of wildflowers. Steep paths lead to hilltop Buddhist monasteries such as Pemayangtse, which dates to the early 1700",
      },
      {
        lat: 34.0484,
        lng: 74.3805,
        name: "Gulmarg",
        img: " https://images.unsplash.com/photo-1568889753852-196c487a536e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3VsbWFyZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 ",
        tag: "Gulmarg, known as Gulmarag in Kashmiri, is a town, hill station, popular skiing destination, and notified area committee in the Baramulla district of Jammu and Kashmir, India. It is located at a distance of 31 km from Baramulla and 49 km from Srinagar.",
      },
    ],
    beach: [
      {
        lat: 15.2993,
        lng: 74.124,
        name: "Goa",
        img: " https://images.unsplash.com/photo-1581892197913-fd2e407e698a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z29hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60 ",
        tag: "Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda.",
      },
      {
        lat: 17.6868,
        lng: 83.2185,
        name: "Vishakapatnam",
        img: " https://images.unsplash.com/photo-1578659485464-5cdc8f485d8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlzaGFraGFwYXRuYW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60 ",
        tag: "Visakhapatnam is a port city and industrial center in the Indian state of Andhra Pradesh, on the Bay of Bengal. It's known for its many beaches, including Ramakrishna Beach, home to a preserved submarine at the Kursura Submarine Museum. Nearby are the elaborate Kali Temple and the Visakha Museum, an old Dutch bungalow housing local maritime and historical exhibits.",
      },
      {
        lat: 20.2961,
        lng: 85.8245,
        name: "Bhubneshwar",
        img: " https://images.unsplash.com/photo-1617217139357-b77ae58ad4b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymh1YmFuZXN3YXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60 ",
        tag: "Bhubaneswar is an ancient city in India’s eastern state of Odisha, formerly Orissa. Many temples built from sandstone are dotted around Bindu Sagar Lake in the old city, including the 11th-century Hindu Lingaraja Temple. Outside Rajarani Temple are sculpted figures of the guardians of the 8 cardinal and ordinal directions. Jain antiques, weaponry and indigenous pattachitra paintings fill the Odisha State Museum.",
      },
      {
        lat: 11.7401,
        lng: 92.6586,
        name: "Andaman and Nicobar Islands",
        img: " https://images.unsplash.com/photo-1574616343659-f67de01e2681?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5kYW1hbiUyMGFuZCUyMG5pY29iYXIlMjBpc2xhbmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60 ",
        tag: "The Andaman Islands are an Indian archipelago in the Bay of Bengal. These roughly 300 islands are known for their palm-lined, white-sand beaches, mangroves and tropical rainforests. Coral reefs supporting marine life such as sharks and rays make for popular diving and snorkeling sites. Indigenous Andaman Islanders inhabit the more remote islands, many of which are off limits to visitors",
      },
    ],
    adventure: [
      {
        lat: 20.5519,
        lng: 75.7033,
        name: "Ajanta Caves",
        img: " https://images.unsplash.com/photo-1583316484710-c0f76f4e13a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWphbnRhJTIwY2F2ZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60 ",
        tag: "The Ajanta Caves are approximately 30 rock-cut Buddhist cave monuments dating from the 2nd century BCE to about 480 CE in the Aurangabad district of Maharashtra state in India",
      },
      {
        lat: 26.5775,
        lng: 93.1711,
        name: "Kaziranga National Park",
        img: " https://media.istockphoto.com/photos/animalrhinoceros-picture-id1367197268?b=1&k=20&m=1367197268&s=170667a&w=0&h=UCcQ_fT2tO8BsOkQdcrZgK3QwjPjkC1HAGu6qfw-4Eg= ",
        tag: "Kaziranga National Park is a protected area in the northeast Indian state of Assam. Spread across the floodplains of the Brahmaputra River, its forests, wetlands and grasslands are home to tigers, elephants and the world’s largest population of Indian one-horned rhinoceroses. Ganges River dolphins swim in the park’s waters. It’s visited by many rare migratory birds, and gray pelicans roost near Kaziranga village.",
      },
      {
        lat: 29.53,
        lng: 78.7747,
        name: "Jim Corbett National Park",
        img: " https://images.unsplash.com/photo-1603634751673-d47ba782e292?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8amltJTIwa29yYmV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60 ",
        tag: "Jim Corbett National Park is a forested wildlife sanctuary in northern India’s Uttarakhand State. Rich in flora and fauna, it’s known for its Bengal tigers. Animals, including tigers, leopards and wild elephants, roam the Dhikala zone. On the banks of the Ramganga Reservoir, the Sonanadi zone is home to elephants and leopards, along with hundreds of species of birds.",
      },
      {
        lat: 21.9497,
        lng: 89.1833,
        name: "Sundarban",
        img: " https://images.unsplash.com/photo-1551615577-1c7e180a77ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZGFyYmFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60 ",
        tag: "Sundarbans is a mangrove area in the delta formed by the confluence of the Padma, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans the area from the Baleswar River in Bangladesh's division of Khulna to the Hooghly River in India's state of West Bengal.",
      },
    ],
    history: [
      {
        lat: 25.2622,
        lng: 85.4788,
        name: "Nalanda",
        img: " https://media.istockphoto.com/photos/nalanda-university-bihar-ruin-picture-id505519489?b=1&k=20&m=505519489&s=170667a&w=0&h=qAWSIy5nqtD9m79eLhVIj6B1sWC5EYfNdccgMXuDTeM= ",
        tag: "Nalanda district is one of the thirty-eight districts of the state of Bihar in India. Bihar Sharif is the administrative headquarters of this district. The districts contain the ancient Nalanda Mahavihara a UNESCO World Heritage site. Nalanda is located in the Magadh region of southern Bihar.",
      },
      {
        lat: 28.7041,
        lng: 77.1025,
        name: "Delhi",
        img: " https://images.unsplash.com/photo-1592639296346-560c37a0f711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGVsaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60 ",
        tag: "Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. Nearby is Chandni Chowk, a vibrant bazaar filled with food carts, sweets shops and spice stalls.",
      },
      {
        lat: 27.1767,
        lng: 78.0081,
        name: "Agra",
        img: " https://images.unsplash.com/photo-1592639296346-560c37a0f711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGVsaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60 ",
        tag: "Agra is a city on the banks of the Yamuna river in the Indian state of Uttar Pradesh, about 210 kilometres south of the national capital New Delhi and 335 km west of the state capital Lucknow. ",
      },
      {
        lat: 22.5726,
        lng: 88.3639,
        name: "Kolkata",
        img: " https://images.unsplash.com/photo-1558431382-27e303142255?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a29sa2F0YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 ",
        tag: "Kolkata (formerly Calcutta) is the capital of India's West Bengal state. Founded as an East India Company trading post, it was India's capital under the British Raj from 1773–1911. Today it’s known for its grand colonial architecture, art galleries and cultural festivals. It’s also home to Mother House, headquarters of the Missionaries of Charity, founded by Mother Teresa, whose tomb is on site.",
      },
    ],
  };

  const [slug, setSlug] = useState("");
  const update = (slugg) => {
    setSlug(slugg);
  };

  const [catPlace, setCatPlace] = useState("");
  const updateCatPlace = (place) => {
    setCatPlace(place);
  };
  return (
    <slugContext.Provider
      value={{ slug, update, category, catPlace, updateCatPlace }}
    >
      {props.children}
    </slugContext.Provider>
  );
};

export default SlugState;
