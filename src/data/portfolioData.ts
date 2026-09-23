import { Project, EmailTemplate, SkillItem, ExperienceItem, AwardItem } from '../types';
import localStoragePreview from '../images/local-storage-script-preview.png';
import financewebpagepreview from '../images/finance-webpage-preview.png';
import mensshoppreview from '../images/mensshop-preview.png';
import sunnysidepreview from '../images/sunnyside-preview.png';
import loopstudiospreview from '../images/loopstudios-preview.png';
export const personalInfo = {
  name: 'Ram Kumar',
  role: 'Web Specialist & Digital Web Production',
  eyebrow: "HELLO, I'M",
  location: 'Chennai, India',
  email: 'ramkumar19121996@gmail.com',
  phone: '6381178710',
  linkedin: 'linkedin.com/in/ram-kumar-86b096140',
  linkedinUrl: 'https://linkedin.com/in/ram-kumar-86b096140',
  githubUrl: 'https://github.com/ramkumarkalimuthu',
  bio: 'I build responsive, accessible and brand-focused digital experiences for enterprise marketing teams.',
  aboutText: 'Web Specialist with 6+ years of experience supporting enterprise digital marketing programs through web content updates, landing pages, email development, CMS asset management, QA, and accessibility. I enjoy turning complex requirements into clean, accessible and high-performing digital experiences.',
  quote: 'Clean code, better experiences, happier users.',
  headlineHandwritten: 'Turning Ideas into Impact',
  tags: [
    'Email Campaigns Development',
    'Web Development',
    'CMS',       
    
  ]
};

export const statsData = [
  {
    value: '6+',
    label: 'Years Experience',
    icon: 'calendar'
  },
  {
    value: '50+',
    label: 'Email Templates',
    icon: 'mail'
  },
  {
    value: '100+',
    label: 'Web Content Updates',
    icon: 'monitor'
  },
  {
    value: '100%',
    label: 'Client Satisfaction',
    icon: 'trophy'
  }
];

export const skillsData: SkillItem[] = [
  { name: 'HTML5', iconType: 'html5', color: '#E34F26', category: 'core' },
  { name: 'CSS3', iconType: 'css3', color: '#1572B6', category: 'core' },
  { name: 'JavaScript', iconType: 'javascript', color: '#F7DF1E', category: 'core' },
  { name: 'PHP', iconType: 'php', color: '#777BB4', category: 'core' },
  { name: 'MySQL', iconType: 'mysql', color: '#4479A1', category: 'core' },
  { name: 'WordPress', iconType: 'wordpress', color: '#21759B', category: 'core' },
  { name: 'React JS', iconType: 'react', color: '#61DAFB', category: 'framework' },
  { name: 'Git', iconType: 'git', color: '#F05032', category: 'tools' },
  { name: 'VMZ', iconType: 'vmz', color: '#0F172A', category: 'email' },
  { name: 'Litmus', iconType: 'litmus', color: '#F25C54', category: 'email' },
  { name: 'Email on Acid', iconType: 'emailonacid', color: '#6BBF43', category: 'email' },
  { name: 'Figma', iconType: 'figma', color: '#F24E1E', category: 'tools' }
];

export const websiteProjects: Project[] = [
  {
    id: 'Local Storage Script',
    number: '1',
    title: 'Local Storage Script',
    category: 'Frontend',
    description: 'A browser-based developer utility for inspecting and managing client-side local storage. Built with HTML, CSS, and JavaScript, featuring CRUD operations, search/filtering, JSON handling, clipboard utilities, and responsive dark/light themes.',
    tags: ['JavaScript', 'LocalStorage API', 'HTML5', 'CSS3'],
    liveUrl: 'https://localstoragescript.netlify.app',
    githubUrl: 'https://github.com/ramkumarkalimuthu/localstorage',
    mockupType: 'Local Storage Script',
    imageUrl: localStoragePreview
  },
  {
    id: 'Finance Webpage',
    number: '2',
    title: 'Finance Webpage',
    category: 'Frontend',
    description: 'A modern multi-page finance website featuring responsive layouts, professional UI design, structured navigation, and interactive elements for a seamless user experience.',
    tags: ['HTML5', 'CSS3', 'JavaScript','Bootstrap4', 'Responsive'],
    liveUrl: 'https://financewebpage.netlify.app',
    githubUrl: 'https://github.com/ramkumarkalimuthu/finace_template',
    mockupType: 'Finance Webpage',
    imageUrl: financewebpagepreview
  },
  {
    id: 'Mens Shop',
    number: '3',
    title: "Men's Shop",
    category: 'Frontend',
    description: 'A modern multi-page mens fashion e-commerce website featuring product-focused layouts, category navigation, responsive design, and interactive UI elements for a smooth and engaging shopping experience.',
    tags: ['HTML5', 'CSS3', 'JavaScript','Bootstrap4', 'E-commerce'],
    liveUrl: 'https://menshops.netlify.app',
    githubUrl: 'https://github.com/ramkumarkalimuthu/menshoptemplate',
    mockupType: 'Mens Shop',
    imageUrl: mensshoppreview
  },
  {
    id: 'Sunnyside',
    number: '4',
    title: 'Sunnyside',
    category: 'Frontend',
    description: 'A modern, visually engaging landing page for a creative digital agency, featuring a clean layout, bold typography, responsive sections, and carefully structured content to create a polished user experience across desktop and mobile devices.',
    tags: ['HTML', 'CSS', 'Javascript'],
    liveUrl: 'https://frontendprojectslist.netlify.app/sunnyside/',
    githubUrl: 'https://github.com/ramkumarkalimuthu/frontend-project/tree/main/sunnyside',
    mockupType: 'webapp',
    imageUrl: sunnysidepreview
  },
  {
    id: 'Loopstudios Landing Page',
    number: '5',
    title: 'Loopstudios Landing Page',
    category: 'Frontend',
    description: 'A modern VR-focused landing page showcasing immersive digital experiences through bold typography, responsive layouts, interactive navigation, and a visually engaging creations gallery. The design emphasizes strong visual hierarchy and a seamless experience across desktop and mobile devices.',
    tags: ['JavaScript', 'HTML5', 'CSS3'],
    liveUrl: 'https://frontendprojectslist.netlify.app/loopstudios/',
    githubUrl: 'https://github.com/ramkumarkalimuthu/frontend-project/tree/main/loopstudios',
    mockupType: 'countries',
    imageUrl: loopstudiospreview
  }
];

export const emailTemplates: EmailTemplate[] = [
  {
    id: 'template-01',
    number: '1',
    title: 'A Fresher — Email Template',
    category: 'Email Template',
    description: 'A professionally designed responsive HTML email template created for a fresher-focused campaign, featuring a clean visual hierarchy, structured content sections, prominent call-to-action elements, and email-client-friendly layouts.',
    client: 'A Fresher',
    htmlCode: String.raw`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<!-- This site is hosted on Netlify. Anyone can build and deploy a site
     like this one for free: https://netlify.new/?utm_campaign=loops&utm_source=ai-legible&utm_medium=owned&utm_content=comment&utm_id=70637012-e40b-4c3e-8f1f-a226aee6c85b
     Netlify hosting facts for this site: static/SSR served via Netlify Edge. -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="x-apple-disable-message-reformatting" />
   <meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
  <title>Newletter</title>
	
	<style type="text/css">
		/* What it does: Another work-around for iOS meddling in triggered links. */
a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
}
		body { background-color: #141414; margin: 0px; padding:0px; font-family: Arial, sans-serif; font-size: 15px; line-height: 22px; color:#636363; }
		a{text-decoration: none} 
		/* below class uses only variable headshot */
		.headshot img{max-width: 100%}
		
		/* below class use for number change blue color pixel6 */
		.mob_link a{color: inherit !important; }
		.superscript{
			line-height: 0px;
			font-size: 15px;
			vertical-align: 10px;
		}
		
		
		@media only screen and (max-width:480px){
			.image, .image_custom_bannar { width:100%!important; height:auto!important; }
			.container { width:480px!important; }
			.db { display: block!important; }
			.dw { width:100%!important; min-width:100%!important; max-width:100%!important; }
			.tc{text-align: center!important;}
			.pt{padding-top:0px!important;}
			.mb{margin-bottom: 25px;}
			.nospace{white-space: normal;}
			br{
				display: none !important;
				visibility: hidden !important;
			}
			.pl{padding-left:0px!important;}
		}
		@media only screen and (max-width:480px){
				.container { width:100%!important; }
			.no-width{width:20% !important;}
           .yes-width{width:60% !important;}
			}
	</style>
	
</head>
	<body>
<table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f1f1f1;">
<tbody>

<tr>
<td align="center" valign="top">
<table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #141414; width: 600px;" class="container">
<tbody><!-- Let to strat--->
	
<tr>
	<td align="left" valign="top" style="background-color:#141414;padding: 0px 30px">
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
  			<tbody>
	  			<tr><td height="8"></td></tr>
    			<tr>
      				<td width="50%" align="left" valign="top" style="font-family: Arial, sans-serif; font-size: 12px; line-height:16px; color:#ffffff;"></td>
					<td width="50%" align="right" valign="top" style="font-family: Arial, sans-serif; font-size: 12px; line-height:16px; color:#636363;">View in the browser</td>
    			</tr>
	  			<tr><td height="8"></td></tr>
  			</tbody>
		</table>
	</td>
</tr>

<tr>
	<td align="left" valign="top"  style="padding:0px 30px">
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
  			<tbody>
    			<tr><td height="20"></td></tr>
				<tr>
				  <td width="55%" align="left" valign="top" class="db dw tc mb"><img src="logo.png" width="190" alt="Logo"/></td>
					<td width="45%" align="right" valign="top" class="db dw tc">
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <td width="20%" align="right" valign="top" style="font-family: Arial, sans-serif; font-size: 15px; line-height:24px; color:#636363;" class="tc">Websites</td>
		<td width="3%"></td>
      <td width="20%" align="right" valign="top" style="font-family: Arial, sans-serif; font-size: 15px; line-height:24px; color:#636363;" class="tc">Components</td>
		<td width="3%"></td>
      <td width="15%" align="right" valign="top" style="font-family: Arial, sans-serif; font-size: 15px; line-height:22px; color:#636363;" class="tc">Pages</td>
    </tr>
  </tbody>
</table>

					
					</td>
				</tr>
    			<tr><td height="20"></td></tr>
  			</tbody>
		</table>
	</td>
</tr>


<tr>
	<td align="left" valign="top" style="padding:0px 30px">
   		<table width="100%" border="0" cellspacing="0" cellpadding="0">
  			<tbody>
				<tr><td height="32"></td></tr>
				<tr>
					<td align="left" valign="top">
						<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody>
   <tr>
      				<td align="left" valign="top" style="font-family: Arial, sans-serif; font-size: 12px; line-height:18px;font-weight:bold; color:#616161;text-transform:uppercase">
						Monthly Recap
					</td>
    			</tr>
				<tr><td height="5"></td></tr>
				<tr>
      				<td align="left" valign="top" style="font-family: Arial, sans-serif; font-size: 36px; line-height:38px; color:#FFFFFF;">
						Staff picks
					</td>
    			</tr>
  </tbody>
</table>

					
					</td>
				</tr>
    			<tr><td height="32"></td></tr>
	
	<tr><td height="2" style="background-color:#343434"></td></tr>
	
	
				<tr>
		<td align="left" valign="top">
			<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody>
	  <tr><td height="32"></td></tr>
    <tr>
      <td width="50%" align="left" valign="top" class="db dw mb tc">
		<img src="tola.png" width="232"  alt="tola"/></td>
      <td width="50%" align="left" valign="middle" class="db dw">
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <td align="left" valign="top" style="font-family: Arial, sans-serif; font-size: 28px; line-height:28px; color:#FFFFFF;">Tola</td>
    </tr>
	  <tr><td height="10"></td></tr>
	  <tr>
      <td align="left" valign="top" style="font-family: Arial, sans-serif; font-size: 16px; line-height:24px; color:#636363;">Tola combines accounts payable, receivable and cash flow management with working capital, helping save businesses time and money.</td>
    </tr>
	   <tr><td height="10"></td></tr>
	  <tr><td align="left" valign="top" style="font-family: Arial, sans-serif; font-size: 16px; line-height:24px; color:#ffffff;background-color:#262626;display: inline-block;padding:12px 22px;border-radius:8px;">
		  <a href="#" target="_blank" style="font-family: Arial, sans-serif; font-size: 16px; line-height:24px; color:#ffffff;">See more</a>
		  
		  </td></tr>
	  
  </tbody>
</table>

		
		</td>
    </tr>
	  <tr><td height="32"></td></tr>
  </tbody>
</table>

		
		
		</td>
	</tr>
			<tr><td height="2" style="background-color:#343434"></td></tr>	
				<tr>
		<td align="left" valign="top">
			<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody>
	  <tr><td height="32"></td></tr>
    <tr>
      <td width="50%" align="left" valign="top" class="db dw mb tc">
		<img src="yellowbird.png" width="232"  alt="yellowbird"/></td>
      <td width="50%" align="left" valign="middle" class="db dw">
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <td align="left" valign="top" style="font-family: Arial, sans-serif; font-size: 28px; line-height:28px; color:#FFFFFF;">Yellowbird</td>
    </tr>
	  <tr><td height="10"></td></tr>
	  <tr>
      <td align="left" valign="top" style="font-family: Arial, sans-serif; font-size: 16px; line-height:24px; color:#636363;">The world's best-tasting hot sauce.
Made with farm-fresh, no bullish!t ingredients, so you can drizzle as
often and adventurously as you like.</td>
    </tr>
	   <tr><td height="10"></td></tr>
	  <tr><td align="left" valign="top" style="font-family: Arial, sans-serif; font-size: 16px; line-height:24px; color:#ffffff;background-color:#262626;display: inline-block;padding:12px 22px;border-radius:8px;">
		  <a href="#" target="_blank" style="font-family: Arial, sans-serif; font-size: 16px; line-height:24px; color:#ffffff;">See more</a>
		  
		  </td></tr>
	  
  </tbody>
</table>

		
		</td>
    </tr>
	  <tr><td height="32"></td></tr>
  </tbody>
</table>

		
		
		</td>
	</tr>
				
				<tr><td height="2" style="background-color:#343434"></td></tr>
				
				<tr>
		<td align="left" valign="top">
			<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody>
	  <tr><td height="32"></td></tr>
    <tr>
      <td width="50%" align="left" valign="top" class="db dw mb tc">
		<img src="mantie.png" width="232"  alt="mantle"/></td>
      <td width="50%" align="left" valign="middle" class="db dw">
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <td align="left" valign="top" style="font-family: Arial, sans-serif; font-size: 28px; line-height:28px; color:#FFFFFF;">MAN-TLE</td>
    </tr>
	  <tr><td height="10"></td></tr>
	  <tr>
      <td align="left" valign="top" style="font-family: Arial, sans-serif; font-size: 16px; line-height:24px; color:#636363;">Heavy Weight Clothing Pty Ltd is an
Australian company designing and manufacturing the collections of MANTLE.</td>
    </tr>
	   <tr><td height="10"></td></tr>
	  <tr><td align="left" valign="top" style="font-family: Arial, sans-serif; font-size: 16px; line-height:24px; color:#ffffff;background-color:#262626;display: inline-block;padding:12px 22px;border-radius:8px;">
		  <a href="#" target="_blank" style="font-family: Arial, sans-serif; font-size: 16px; line-height:24px; color:#ffffff;">See more</a>
		  
		  </td></tr>
	  
  </tbody>
</table>

		
		</td>
    </tr>
	  <tr><td height="32"></td></tr>
  </tbody>
</table>

		
		
		</td>
	</tr>
				
				<tr><td height="2" style="background-color:#343434"></td></tr>
				<tr>
		<td align="left" valign="top">
			<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody>
	  <tr><td height="32"></td></tr>
    <tr>
      <td width="50%" align="left" valign="top" class="db dw mb tc">
		<img src="monolif.png" width="232"  alt="monolif"/></td>
      <td width="50%" align="left" valign="middle" class="db dw">
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <td align="left" valign="top" style="font-family: Arial, sans-serif; font-size: 28px; line-height:28px; color:#FFFFFF;">MONOLIF</td>
    </tr>
	  <tr><td height="10"></td></tr>
	  <tr>
      <td align="left" valign="top" style="font-family: Arial, sans-serif; font-size: 16px; line-height:24px; color:#636363;">A Creative Micro-Studio that crafts
bespoke websites &amp; digital experiences for startups. </td>
    </tr>
	   <tr><td height="10"></td></tr>
	  <tr><td align="left" valign="top" style="font-family: Arial, sans-serif; font-size: 16px; line-height:24px; color:#ffffff;background-color:#262626;display: inline-block;padding:12px 22px;border-radius:8px;">
		  <a href="#" target="_blank" style="font-family: Arial, sans-serif; font-size: 16px; line-height:24px; color:#ffffff;">See more</a>
		  
		  </td></tr>
	  
  </tbody>
</table>

		
		</td>
    </tr>
	  <tr><td height="32"></td></tr>
  </tbody>
</table>

		
		
		</td>
	</tr>
				
				<tr><td height="2" style="background-color:#343434"></td></tr>
				
				<tr><td height="32"></td></tr>
				
				<tr><td align="left" valign="top" style="background-color:#BCFE2F; padding:0px 22px;border-radius:12px">
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody>
	  <tr><td height="16"></td></tr>
    <tr>
      <td width="60%" align="left" valign="middle" style="font-family: 'Inter', sans-serif; 
  font-weight:700;
   color:#000000;font-size:14px;line-height: 24px">Get inspired with no limits</td>
		 <td width="40%" align="right" valign="top">
			 <table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody>
   <tr><td align="right" valign="top" style="font-family: Arial, sans-serif; font-size: 16px; line-height:24px; color:#ffffff;">
		  <a href="#" target="_blank" style="font-family: Arial, sans-serif; font-size: 16px; line-height:24px; color:#ffffff;background-color:#262626;display: inline-block;padding:12px 22px;border-radius:8px;">Become PRO</a>
		  
		  </td></tr>
  </tbody>
</table>

			 
			</td>
    </tr>
	  <tr><td height="16"></td></tr>
  </tbody>
</table>

					
					
					</td></tr>
				
				
				
				<tr><td height="32"></td></tr>
				
				<tr><td height="2" style="background-color:#343434"></td></tr>
				
				
				
  			</tbody>
		</table>		
	</td>
</tr>

	<tr>
	<td align="left" valign="top"  style="padding:0px 30px">
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
  			<tbody>
    			<tr><td height="32"></td></tr>
				<tr>
				  <td width="50%" align="left" valign="middle" class="db dw mb tc"><img src="logo.png" width="120" alt="Logo"/></td>
				  <td width="50%" align="right" valign="middle" class="db dw tc">
					  <a href="#" target="_blank"><img src="Instagram.png" width="24" alt="Instagram"/></a>&nbsp;&nbsp;
					 <a href="#" target="_blank"><img src="Facebook.png" width="24" alt="Facebook"/></a>&nbsp;&nbsp;
					 <a href="#" target="_blank"><img src="X.png" width="24" alt="X"/></a>&nbsp;&nbsp;
					 <a href="#" target="_blank"><img src="YouTube.png" width="24" alt="YouTube"/></a>
					
					</td>
				</tr>
    			<tr><td height="32"></td></tr>
  			</tbody>
		</table>
	</td>
</tr>

	
	<tr>
	<td align="left" valign="top" style="padding: 0px 30px;">
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
			<tbody>
				<tr><td height="32"></td></tr>
				<tr>
					<td align="left" valign="top" style="color:#6e6e6e; font-size:13px;line-height:16px;font-family: Arial, sans-serif;">
						T. Sevcenkos g. 16K, Vilnius Lithuania
					</td>
				</tr>
				<tr><td height="16"></td></tr>
				<tr>
					<td align="left" valign="top" style="color:#6e6e6e; font-size:13px;line-height:16px;font-family: Arial, sans-serif;">
						You received this email because you signed up on our website or made a purchase from us.
					</td>
				</tr>
				<tr><td height="16"></td></tr>
				<tr>
					<td align="left" valign="top" style="color:#6e6e6e; font-size:13px;line-height:16px;font-family: Arial, sans-serif;">
						Unsubscribe
					</td>
				</tr>
				<tr><td height="32"></td></tr>
			</tbody>
		</table>
	</td>
</tr>

	<tr>
	<td align="left" valign="top" >
		<table width="100%" border="0" cellspacing="0" cellpadding="0">
  			<tbody>
    			
				<tr>
				  <td><img src="big_logo.png" width="600" alt="big_logo" class="image"/></td>
				</tr>
    			
  			</tbody>
		</table>
	</td>
</tr>


	
</tbody>
</table>
</td>
</tr>


<!--Email Template Ends--></tbody>
</table>
</body>
</html>`,   
   
    subjectLine: 'A Fresher – Responsive HTML Email Template',
    liveUrl: 'https://emailcampaigns.netlify.app/a-fresher-website/index.html',
    imageUrl: 'https://a-fresher-email-template.netlify.app/preview.png'
  },
  
];

export const experienceData: ExperienceItem[] = [
  {
    role: 'Web Specialist',
    company: 'RR Donnelley',
    period: 'Feb 2020 – Current',
    location: 'Chennai, India',
    description: 'Working on enterprise clients like Voya and Goodwin. Developing email templates, web content, CMS asset management, QA, and managing digital assets.',
    isCurrent: true
  },
  {
    role: 'Software Engineer',
    company: 'iGlowSoft',
    period: 'Oct 2018 – Jan 2020',
    location: 'Chennai, India',
    description: 'Developed WordPress websites, custom plugins, and web applications. Worked on DhobiChacha web app and automation scripts.',
    isCurrent: false
  }
];

export const awardsData: AwardItem[] = [
  {
    title: 'Technical Excellence Award',
    description: 'Recognized for VMZ expertise and technical troubleshooting.',
    iconType: 'trophy',
    color: '#F59E0B'
  },
  {
    title: 'Rising Star of the Quarter',
    description: 'For client-focused delivery and team contribution.',
    iconType: 'star',
    color: '#EC4899'
  },
  {
    title: 'Bright Spark Award',
    description: 'For dedication and commitment to team success.',
    iconType: 'sparkle',
    color: '#3B82F6'
  }
];
