# kilodesign.dk process breakdown
---------------------------------
<br>
<br>
# Design
---
<br>

| Page type                   | Hours     |
| --------------------------- | --------- |
| **1. Front Page**           | 2 h       |
| **2. Project Overview**     | 2 h       |
| **3. Project Single View**  | 2 h       |
| **4. Blog Overview**        | 1 h       |
| **5. Blog Single View**     | 1 h       |
| **6. Contact**              | 1 h       |
| **7. About**                | 1 h       |
| **Total**                   | **9 h**   |

| Global element              | Hours     |
| --------------------------- | --------- |
| **A. Global navigation**    | 3 h       |
| **B. Site footer**          | 1 h       |
| **Total**                   | **4 h**   |

<br>
---
### page type description
---

#### 1. Front Page
**Front Page** should introducing kilodesign with immersive visual experience. This page type includes **`Hero Statement Element`** and **`Selected Feature Projects`**.

**`Hero Statement Element`** is constructed with a html5 native video and a text element. The native video will stream and loop the mood video; the text element will show the statement copy.

**`Selected Feature Projects`** is constructed with a number of **`Project Thumbnail`**. Editors are able to configure which project and how many projects will be presented in the front page. The **`Selected Feature Projects`** will be arranged in a grid-like or mansonry-like layout.

#### 2. Project Overview
**Project Overview** should give users a clear glance on kilodesign's landscape. The amount of the projects is not defined yet. At the current stage there is no hierarchy on projects, but it is possible to introducing different views of the project **`Project Thumbnail`**(e.g. Highlighted project with special layout), and this is depends on the budget. This page type is mainly constructed by **`Project Thumbnail`**.

**`Project Thumbnail`** is constructed with a thumbnail image(or video, depends on budget), project title, client name and project publish date.

#### 3. Project Single View
**Project Single View** should be able to walk users through the project both in visually impressed details and a overall concept of the project. So this page type is constructed in following elements: **`Project Hero
elements`**, **`Project Media Gallery`**, **`Project Description`**, **`Project Meta Information`**.

**`Project Hero elements`** should be able to present the essence of the project with single impactful imagery. **`Project Hero elements`** is constructed with a background image, and project title.

**`Project Media Gallery`** should be able to showcase the details of the project, **`Project Media Gallery`** is constructed with a serial of image or embedded format video.

**`Project Description`** is constructed with a free text format.

**`Project Meta Information`** is constructed with following information, *Design by*, *Year*, *Brand*, *Status*, *Buy*, *Download*.

#### 4. Blog Overview
**Blog Overview** should give users a quick update on kilodesign latest activities. The current site does not show support of tagging and category, and these features canbe introduced in new site depends on the design.
This page type is mainly constructed by **`Blog Thumbnail`**.

**`Blog Thumbnail`** is constructed with a thumbnail image(or video, depends on budget), blog title, dates and short description of the blog.

#### 5. Blog Single View
**Blog Single View** should give user a short update on the latest activities. This page type is constructed with a **`Single image`** or **`Youtube embedded video`**, **`Blog title`**, **`Blog date`**, **`Blog description`**. Due to the simple content structure, it is possible to introducing the overlay to reduce the complexity of the site, and improve the user experience.

#### 6. Contact
**Contact** will be a copy page type of the current site.

#### 7. About
**About** will be a copy page type of the current site.

<br>
---
### Global elements description
---

#### A. Global navigation
**Global navigation** will be similar to current site, it is possible to remove the search function to reduce the complexity of the site. It is not clear on how the intraction of the element will be at the current stage, and we hope to reach a optimal solution during the design process.

#### B. Site footer
**Site footer** is constructed with social media elements and contact information.

<br>
<br>
---------------------------------
# Front-end interface Design
---------------------------------
<br>

| Elements                                | Hours     |
| --------------------------------------- | --------- |
| **`Hero Statement Element`**            | 5 h       |
| **`Selected Feature Projects`**         | 5 h       |
| **`Project Thumbnail`**                 | 3 h       |
| **`Project Hero elements`**             | 3 h       |
| **`Project Media Gallery`**             | 3 h       |
| **`Project Description`**               | 2 h       |
| **`Project Meta Information`**          | 2 h       |
| **`Blog Overview`**                     | 5 h       |
| **`Blog Thumbnail`**                    | 3 h       |
| **`Contact page`**                      | 3 h       |
| **`About page`**                        | 3 h       |
| **`Page class`**                        | 5 h       |
| **`Misc`**                              | 3 h       |
| **`Environment setup`**                 | 1 h       |
| **Total**                               | **46 h**   |

| Global element              | Hours     |
| --------------------------- | --------- |
| **A. Global navigation**    | 5 h       |
| **B. Site footer**          | 2 h       |
| **Total**                   | **7 h**   |


<br>
<br>
---------------------------------
# Back-end twig grav/siteleaf intergration
---------------------------------
<br>

The current site is build with wordpress, we would like to introduce a faster database-less content management system. We recommend [Grav](https://getgrav.org/). Here is the breakdown of the implmentation.


| Task                                        | Hours     |
| ------------------------------------------- | --------- |
| **Template integration**                    | 7 h       |
| **Front-end elements integration**          | 7 h       |
| **Environment setup**                       | 2 h       |
| **Maintain**                                | 2 h       |
| **Total**                                   | **18 h**   |




<br>
<br>
---------------------------------
# Total hour consumption
---------------------------------


| Phase                                               | Total Hours     |
| --------------------------------------------------- | ---------       |
| **Design**                                          | 13 h            |
| **Front-end interface Design**                      | 53 h            |
| **Back-end twig grav/siteleaf intergration**        | 18 h            |
| **Total**                                           | **84 h**        |
