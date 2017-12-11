// TODO: retrieve from https://fosdem.org/2018/schedule/xml

export default `<?xml version="1.0" encoding="UTF-8"?>
<schedule>
  <conference>
    <title>FOSDEM 2018</title>
    <subtitle/>
    <venue>ULB (Université Libre de Bruxelles)</venue>
    <city>Brussels</city>
    <start>2018-02-03</start>
    <end>2018-02-04</end>
    <days>2</days>
    <day_change>09:00:00</day_change>
    <timeslot_duration>00:05:00</timeslot_duration>
  </conference>
  <day index="1" date="2018-02-03">
    <room name="Janson">
    </room>
    <room name="K.1.105 (La Fontaine)">
    </room>
    <room name="H.2215 (Ferrer)">
    </room>
    <room name="H.1301 (Cornil)">
    </room>
    <room name="H.1302 (Depage)">
    </room>
    <room name="H.1308 (Rolin)">
    </room>
    <room name="H.1309 (Van Rijn)">
    </room>
    <room name="H.2111">
    </room>
    <room name="H.2213">
    </room>
    <room name="H.2214">
    </room>
    <room name="H.3227">
    </room>
    <room name="H.3228">
    </room>
    <room name="AW1.120">
    </room>
    <room name="AW1.121">
    </room>
    <room name="AW1.125">
    </room>
    <room name="AW1.126">
    </room>
    <room name="K.3.201">
    </room>
    <room name="K.3.401">
      <event id="6787">
        <start>10:30</start>
        <duration>00:30</duration>
        <room>K.3.401</room>
        <slug>the_freebsd_fundation_how_we_can_change_the_world</slug>
        <title>The FreeBSD Foundation and How We Are Changing the World</title>
        <subtitle/>
        <track>BSD</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;The FreeBSD Foundation was founded in 2000, initially to own the FreeBSD trademarks and intellectual property. Over the past 17 years, we’ve grown from being run by 3 volunteer board members, to a team of 9 staff members, and 8 volunteer board members. My presentation will cover a little bit of our history, what’s our purpose, the key areas we focus on and why, and how we are making this a better world, by supporting FreeBSD, the community, and the overall open source ecosystem.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;The purpose of my talk is to tell the BSD community about the work we are doing, and what we can do to help them. I will address the key areas we focus on and highlight the work we did in 2017, and why it was important to keeping FreeBSD relevant and innovative. I will have a Q&amp;amp;A session at the end, so attendees can ask questions about the Foundation, and what they'd like to see us working on in 2018. This will be a good opportunity to have a face-to-face dialogue with community members we don't normally get to talk to in person.&lt;/p&gt;</description>
        <persons>
          <person id="5127">Deb Goodkin</person>
        </persons>
        <links>
          <link href="http://www.freebsdfoundation.org">FreeBSD Foundation website</link>
          <link href="https://submission.fosdem.org/feedback/6787.php">Submit feedback</link>
        </links>
      </event>
      <event id="6327">
        <start>11:55</start>
        <duration>00:35</duration>
        <room>K.3.401</room>
        <slug>bsd_from_scratch</slug>
        <title>BSD from scratch - from source to OS with ease on NetBSD</title>
        <subtitle/>
        <track>BSD</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;NetBSD has had support for cross compilation for some time now.
This talk covers the features and changes in NetBSD enabling a
new comer to set out from obtaining a copy of the NetBSD source code and pkgsrc to
building an OS &amp;amp; Firmware for an ARM board from scratch on an operating system
of their choice.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;NetBSD has had support for cross compilation for some time now.
This talk covers the features and changes in NetBSD enabling a
new comer to set out from obtaining a copy of the NetBSD source code and pkgsrc to
building an OS &amp;amp; Firmware for an ARM board from scratch on an operating system
of their choice. This was leveraged as the basis for a series of workshops
aimed at introducing the NetBSD operating systems to hardware ethusiasts.&lt;/p&gt;

&lt;p&gt;The workshops covered:
Introducing project rescources (source repo &amp;amp; documentation)
Cross compilation with ease
The Lua subsystem - a highlevel language interface to the system
Working locally using simulation
Rapid prototyping with rump
Tamper resistence with veriexec&lt;/p&gt;</description>
        <persons>
          <person id="4853">Sevan Janiyan</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6327.php">Submit feedback</link>
        </links>
      </event>
      <event id="6620">
        <start>12:35</start>
        <duration>00:50</duration>
        <room>K.3.401</room>
        <slug>pot_container_framework</slug>
        <title>pot: another container framework based on jails and ZFS</title>
        <subtitle>A personal/educational project to run containers with the power of FreeBSD</subtitle>
        <track>BSD</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;The initial idea of pot was to imitate containers, like docker, but using FreeBSD technologies, like jails and ZFS. The goal was to run several "pots" on my laptop to serve my needs and, at the same time, to learn how to manage them efficiently, especially in term disk usage. Instead of using/extending existing tools, like ezjail or iocage, I decided to reinvent the wheel and to write myself a new tool.
After some time, I realized that making pot more generic and available to everyone could be a good idea and that's what I intend to present.
I also show some interesting use cases and, hopefully, a live demo.&lt;/p&gt;</abstract>
        <description></description>
        <persons>
          <person id="5023">Luca Pizzamiglio</person>
        </persons>
        <links>
          <link href="https://github.com/pizzamig/pot">The github repository</link>
          <link href="https://submission.fosdem.org/feedback/6620.php">Submit feedback</link>
        </links>
      </event>
      <event id="6420">
        <start>13:30</start>
        <duration>00:50</duration>
        <room>K.3.401</room>
        <slug>cbsd_isolation_manager</slug>
        <title>CBSD, Isolation manager</title>
        <subtitle>How to manage jails, bhyve VMs and Xen via CBSD, while keeping it all simple</subtitle>
        <track>BSD</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;CBSD is able to manage bhyve, jails and xen on a cluster of hosts while keeping dependencies reasonably low. It is able to configure network interfaces and firewall rules dynamically, whether you use PF, IPFW or IPFILTER. This talk will cover main CBSD features, implementation details, future plans and growth of CBSD as well as ecosystem around it.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;Management of Xen, VMs and jails on FreeBSD becomes increasingly tedious job especially with technologies like ZFS and VNET (just to mention few) which add on the number of alternative ways one can run FreeBSD based infrastructure. Combining that with multiple options for a firewall and the requirement for VMs to connect to jails and vice verse, makes FreeBSD very versatile. It is also very hard to choose the right set of tools. CBSD strives to unify management of jails and VMs while not taking away any options, and keeping UI and code simple as possible.&lt;/p&gt;</description>
        <persons>
          <person id="4922">meka</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6420.php">Submit feedback</link>
        </links>
      </event>
      <event id="6159">
        <start>14:25</start>
        <duration>00:30</duration>
        <room>K.3.401</room>
        <slug>pkgsrc_on_chromeos</slug>
        <title>pkgsrc on ChromeOS</title>
        <subtitle/>
        <track>BSD</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;pkgsrc (the NetBSD package collection) supports more than a dozen platforms. On a Chromebook in Dev Mode, you can install "arbitrary" Linux software. Obviously, pkgsrc is the perfect fit for that!&lt;/p&gt;</abstract>
        <description>&lt;p&gt;However, things are not quite as easy. First, you must get a C compiler, and then there are a lot of idiosyncrasies on the platform. This talk gives an overview of how to get started, and shows the grossest hacks I had to do to get a working pkgsrc setup.&lt;/p&gt;</description>
        <persons>
          <person id="848">Benny Siegert</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6159.php">Submit feedback</link>
        </links>
      </event>
      <event id="6013">
        <start>15:00</start>
        <duration>00:30</duration>
        <room>K.3.401</room>
        <slug>openbsd_base_system_maintenance_made_easy</slug>
        <title>syspatch(8)</title>
        <subtitle>OpenBSD base system maintenance made easy</subtitle>
        <track>BSD</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;While installing and upgrading OpenBSD releases has always been a breeze,
keeping a stable installation up-to-date with security and reliability patches
required fetching and applying cvs(1) diffs then build a new release which had
to be deployed on every maintained systems.
In this talk I will introduce a new base system utility: syspatch(8). It is used
to fetch, verify, install and revert OpenBSD "binary" patches.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;I will also describe the patch building process which is completely privileged
separated and explain how and why several parts of the build system had to be
changed.&lt;/p&gt;

&lt;p&gt;As a teaser let me give you a couple of examples.&lt;/p&gt;

&lt;p&gt;At OpenBSD we believe that doing full builds for each patch if the proper way to
go, even though it takes more time and effort. Indeed, an important thing for
building patches are deterministic builds. That is especially true if the patch
tarballs aren't built on the system the original release was created.&lt;/p&gt;

&lt;p&gt;Another challenge is static binaries. These need to be re-linked every time we
patch a library that's a dependency, so if you don't do a full build all the
time, you have to keep a list of these binaries and manually force re-build them
which is error prone.&lt;/p&gt;</description>
        <persons>
          <person id="4406">Antoine Jacoutot</person>
        </persons>
        <links>
          <link href="https://man.openbsd.org/syspatch">syspatch(8) manual page</link>
          <link href="https://submission.fosdem.org/feedback/6013.php">Submit feedback</link>
        </links>
      </event>
      <event id="6255">
        <start>15:35</start>
        <duration>00:45</duration>
        <room>K.3.401</room>
        <slug>openbsd_alarm_system</slug>
        <title>OpenBSD as house alarm system</title>
        <subtitle>Openbsd is not only good for network related projects</subtitle>
        <track>BSD</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;since 1998 I've developped an alamr system based on the velleman K8000 kit. I've first uild it with Linux (slackware), in 2010 I've moved to OpenBSD. I'll describe why OpenBSD is better matching my needs than Linux.&lt;/p&gt;</abstract>
        <description>&lt;ul&gt;
&lt;li&gt;I'll present the need: IR captors, integration with SMS, web interface&lt;/li&gt;
&lt;li&gt;what were the problem with linux&lt;/li&gt;
&lt;li&gt;how I've setup OpenBSD with a read only file system&lt;/li&gt;
&lt;li&gt;Why OpenBSD is perfectly matching those needs&lt;/li&gt;
&lt;li&gt;future plans&lt;/li&gt;
&lt;/ul&gt;


&lt;p&gt;Some elements are on my blog: http://vincentdelft.be/post/post_20160710&lt;/p&gt;</description>
        <persons>
          <person id="4827">Vincent Delft</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6255.php">Submit feedback</link>
        </links>
      </event>
      <event id="6084">
        <start>16:25</start>
        <duration>00:45</duration>
        <room>K.3.401</room>
        <slug>zfs_advanced_integration</slug>
        <title>ZFS: Advanced Integration</title>
        <subtitle>Server, Laptop, Embedded, or Appliance -- ZFS is the Answer</subtitle>
        <track>BSD</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;How to apply various FreeBSD technologies and features in combination with ZFS to get the most out of a system, be it a Server, Laptop, Embedded, or an Appliance.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;ZFS is an advanced filesystem, but that doesn't mean it is complicated or hard to understand.&lt;/p&gt;

&lt;p&gt;After an overview of the basics of what ZFS is and how it works, we'll delve into how to integrate ZFS into a system or product.
Topics to include:
* Boot Environments and how to use them
- new boot environment management tool and library from Google Summer of Code
- case studies / use cases
* Advanced Boot Configuration (zfsbootcfg/nextboot)
- Boot the new system image only once
- Fall back to previous version if new system image fails to stay up for 5 minutes three consecutive times
* Automated Boot Recovery (Appliance style failover/failsafe)
- Fall back to rescue image if system fails to boot repeatedly (required for environments like Amazon where there is no console)
* GELI Encryption Support
- Improvements to allow unattended booting
* Appliance Upgrading with ZFS (including zpool checkpoints)
- Create a checkpoint before upgrading an appliance, revert to checkpoint if upgrade is not completely successful. Checkpoints can undo things that a snapshot cannot, like renaming or destroying an entire filesystem.&lt;/p&gt;

&lt;p&gt;Techniques discussed will be of interest to most everyone, from users and developers for laptops and servers, to appliance manufacturers, and embedded products.&lt;/p&gt;</description>
        <persons>
          <person id="3081">Allan Jude</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6084.php">Submit feedback</link>
        </links>
      </event>
      <event id="6017">
        <start>17:15</start>
        <duration>00:45</duration>
        <room>K.3.401</room>
        <slug>configuring_build_base_on_freebsd</slug>
        <title>Configuring build base on FreeBSD</title>
        <subtitle>Making things easy for the user</subtitle>
        <track>BSD</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;FreeBSD has some knobs to set in order to build the base system or to avoid building some parts of the system. This way the build process could be optimized to avoid wasting time.&lt;/p&gt;

&lt;p&gt;With this procedure, the user has an easier way of configuring how to build the target system&lt;/p&gt;</abstract>
        <description>&lt;p&gt;The first implementation allows the user to set, unset and check the dependencies of the option that can be set to build the base system. Lots of users uses this kind of options to speed up the process of building the base system but there are some dependencies that might not be taken into consideration and the user could realize of this changes when the build process is finished, wasting a lot of building time.&lt;/p&gt;

&lt;p&gt;More than a lecture about this approach, this event is meant to be a demonstration of "how can it be done".&lt;/p&gt;</description>
        <persons>
          <person id="4649">RoberFern</person>
        </persons>
        <links>
          <link href="https://bugs.freebsd.org/bugzilla/show_bug.cgi?id=213572">Bug report with patch</link>
          <link href="https://reviews.freebsd.org/D8396">Diff review patch</link>
          <link href="https://submission.fosdem.org/feedback/6017.php">Submit feedback</link>
        </links>
      </event>
      <event id="6717">
        <start>18:05</start>
        <duration>00:45</duration>
        <room>K.3.401</room>
        <slug>reflections_on_reaching_unix_class_with_freebsd</slug>
        <title>Reflections on Teaching a Unix Class With FreeBSD</title>
        <subtitle>Lessons learned on both sides</subtitle>
        <track>BSD</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;I've been teaching an undergraduate "Unix for Software Developers" class at the University of Applied Sciences, Darmstadt, Germany for a number of years now. The last three years of them in English to allow exchange students to participate as well. I am using FreeBSD in my class and the lab exercises. Topics of the class include an introduction to the Unix shell, editors, filesystems (with a big focus on ZFS), shell programming, grep/sed/awk and since 2017, I also added Ansible. In this talk, I want to reflect on what I learned interacting with the students of various (Unix) backgrounds. I also want to discuss with the audience how to improve the class with relevant topics so that the students get the most out of the class and for their later Unix careers. I'll provide an insight into my labs and what we do there with FreeBSD, too.&lt;/p&gt;</abstract>
        <description></description>
        <persons>
          <person id="5102">Benedict Reuschling</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6717.php">Submit feedback</link>
        </links>
      </event>
    </room>
    <room name="K.4.201">
    </room>
    <room name="K.4.401">
    </room>
    <room name="K.4.601">
    </room>
    <room name="UA2.114 (Baudoux)">
    </room>
    <room name="UA2.220 (Guillissen)">
    </room>
    <room name="UB2.147">
      <event id="6219">
        <start>10:30</start>
        <duration>02:00</duration>
        <room>UB2.147</room>
        <slug>cert_bsdcg</slug>
        <title>BSDCG Exam Session</title>
        <subtitle/>
        <track>Certification</track>
        <type>certification</type>
        <language/>
        <abstract>&lt;p&gt;The BSDA certification is designed to be an entry-level certification on BSD Unix systems administration.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;Testing candidates with a general Unix background and at least six months of work experience as a BSD systems administrator, or who wish to obtain employment as a BSD systems administrator, will benefit most from this certification.&lt;/p&gt;

&lt;p&gt;The successful BSDA candidate is able to complete common administrative and troubleshooting tasks and has a good understanding of general BSD Unix and networking principles. In addition, the successful candidate demonstrates basic skills with these BSD operating systems: Dragonfly BSD, FreeBSD, NetBSD and OpenBSD. This does not mean that the candidate needs to learn the complete details of four operating systems. It does mean that the candidate is aware of the basic utilities common to these operating systems, and where specified in the exam objectives, of features unique to some of the BSD operating systems.&lt;/p&gt;</description>
        <persons>
          <person id="625">BSDCG Team</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6219.php">Submit feedback</link>
        </links>
      </event>
      <event id="6216">
        <start>13:00</start>
        <duration>02:00</duration>
        <room>UB2.147</room>
        <slug>cert_lpi_1</slug>
        <title>LPI Exam Session 1</title>
        <subtitle/>
        <track>Certification</track>
        <type>certification</type>
        <language/>
        <abstract>&lt;h3&gt;LPI offers discounted certification exams at FOSDEM&lt;/h3&gt;</abstract>
        <description>&lt;p&gt;As in previous years, the Linux Professional Institute (LPI) will offer discounted certification exams to FOSDEM attendees.
LPI offers level 1, level 2 and level 3 certification exams at FOSDEM with an almost &lt;strong&gt;50% discount&lt;/strong&gt;.&lt;/p&gt;

&lt;p&gt;For further information and instructions see &lt;a href="https://fosdem.org/certification"&gt;https://fosdem.org/certification&lt;/a&gt;.&lt;/p&gt;</description>
        <persons>
          <person id="1083">LPI Team</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6216.php">Submit feedback</link>
        </links>
      </event>
      <event id="6217">
        <start>15:30</start>
        <duration>02:00</duration>
        <room>UB2.147</room>
        <slug>cert_lpi_2</slug>
        <title>LPI Exam Session 2</title>
        <subtitle/>
        <track>Certification</track>
        <type>certification</type>
        <language/>
        <abstract>&lt;h3&gt;LPI offers discounted certification exams at FOSDEM&lt;/h3&gt;</abstract>
        <description>&lt;p&gt;As in previous years, the Linux Professional Institute (LPI) will offer discounted certification exams to FOSDEM attendees.
LPI offers level 1, level 2 and level 3 certification exams at FOSDEM with an almost &lt;strong&gt;50% discount&lt;/strong&gt;.&lt;/p&gt;

&lt;p&gt;For further information and instructions see &lt;a href="https://fosdem.org/certification"&gt;https://fosdem.org/certification&lt;/a&gt;.&lt;/p&gt;</description>
        <persons>
          <person id="1083">LPI Team</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6217.php">Submit feedback</link>
        </links>
      </event>
    </room>
    <room name="UB2.252A (Lameere)">
    </room>
    <room name="UD2.119">
    </room>
    <room name="UD2.120 (Chavanne)">
    </room>
    <room name="UD2.218A">
    </room>
    <room name="UD2.Corridor">
    </room>
    <room name="J1.106">
    </room>
  </day>
  <day index="2" date="2018-02-04">
    <room name="Janson">
    </room>
    <room name="K.1.105 (La Fontaine)">
    </room>
    <room name="H.2215 (Ferrer)">
    </room>
    <room name="H.1301 (Cornil)">
    </room>
    <room name="H.1302 (Depage)">
    </room>
    <room name="H.1308 (Rolin)">
    </room>
    <room name="H.1309 (Van Rijn)">
    </room>
    <room name="H.2111">
    </room>
    <room name="H.2213">
    </room>
    <room name="H.2214">
    </room>
    <room name="H.3227">
    </room>
    <room name="H.3228">
    </room>
    <room name="AW1.120">
    </room>
    <room name="AW1.121">
    </room>
    <room name="AW1.125">
    </room>
    <room name="AW1.126">
    </room>
    <room name="K.3.201">
    </room>
    <room name="K.3.401">
    </room>
    <room name="K.4.201">
    </room>
    <room name="K.4.401">
    </room>
    <room name="K.4.601">
    </room>
    <room name="UA2.114 (Baudoux)">
      <event id="6795">
        <start>09:00</start>
        <duration>00:05</duration>
        <room>UA2.114 (Baudoux)</room>
        <slug>welcome_legal_policy</slug>
        <title>Welcome to the Legal and Policy Issues devroom</title>
        <subtitle/>
        <track>Legal and Policy Issues</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Welcome to and overview of the seventh year of the Legal and Policy Issues devroom&lt;/p&gt;</abstract>
        <description></description>
        <persons>
          <person id="418">Tom Marble</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6795.php">Submit feedback</link>
        </links>
      </event>
      <event id="6365">
        <start>09:05</start>
        <duration>00:25</duration>
        <room>UA2.114 (Baudoux)</room>
        <slug>research_software_licenses</slug>
        <title>Researchers and software licenses - A disaster waiting to happen</title>
        <subtitle>The story of what we are doing at the german aerospace center (DLR) to prevent that</subtitle>
        <track>Legal and Policy Issues</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;In science and engineering, more and more software is published as Open Source software or uses other Open Source projects. Due to the different licenses with their requirements and restrictions as well as the resultant license compatibility issues, scientists and engineers must be aware of these issues. Ideally, they have some basic understanding about Open Source licensing. Unfortunately, in practice this understanding is not present, especially if more than one Open Source license is involved. But how do you teach scientists and engineers knowledge about open source licenses?&lt;/p&gt;</abstract>
        <description>&lt;p&gt;In this talk, we describe our strategy at the German Aerospace Center (DLR) to awake the awareness among our domain scientists for licensing issues and to enable and support them in using and publishing Open Source software without facing licensing problems. Our strategy is based on providing hands-on material and training courses first, instead of starting issuing "official" but impractical process guides. Our current focus is on knowledge sharing between peer scientists using online tools as well as face-to-face workshops. Thereby collected findings and feedback from DLR scientist have proven to be helpful to improve existing documentation and to identify further steps.
Our strategy is based on years of experience and permanently updating and extending our initial approach. We want to share the so gained knowledge with other projects, rearchers, and companies to help the open source communities found there to improve.&lt;/p&gt;</description>
        <persons>
          <person id="4890">Carina Haupt</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6365.php">Submit feedback</link>
        </links>
      </event>
      <event id="6098">
        <start>09:30</start>
        <duration>00:25</duration>
        <room>UA2.114 (Baudoux)</room>
        <slug>too_young_to_rock_n_roll</slug>
        <title>Too young to rock'n'roll (and to contribute)</title>
        <subtitle>Issues with minors (children) contributing to FOSS projects</subtitle>
        <track>Legal and Policy Issues</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Young people obviously are big users of technology. While this carries its own legal questions, wanting children to be creative and maybe contribute to technology is a really difficult topic. Licences, hosting terms of service, contributor agreements - all these legal documents are made by adults, for adults, and minors often struggle to be able to agree them, even with parental consent. We want to look at what the issues are and raise awareness for the importance of contributions by children.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;For many developers, contributing to open source projects is a trivial thing to do. Fire up GitHub, fork that project, do some changes, commit, push, create pull request - done! Also, for most project maintainers, getting contributions looks as easy - jsut have someone log in to GitHub, fork,… and so on.&lt;/p&gt;

&lt;p&gt;But everyone of us also knows that most of the time, we do not care too much about analysing the terms we submit to. As a contributor, we don't really care about the project's licence as long as it is free, and as a maintainer, we expect contributors to do exactly that. Same goes for the terms of use of our favourite Git hosting service, translation tool, you name it.&lt;/p&gt;

&lt;p&gt;One thing that makes things very easy for adult developers is that we are legally able to accept just about anything that might be written in such terms - but at least one subgroup of developers can't: children younger than a certain age limit.&lt;/p&gt;

&lt;ul&gt;
&lt;li&gt;All US based websites are legally forced to prohibit registration by people younger than 13 years (simply put)&lt;/li&gt;
&lt;li&gt;German children are not allowed to accept any terms that cut legal rights they normally have&lt;/li&gt;
&lt;li&gt;…&lt;/li&gt;
&lt;/ul&gt;


&lt;p&gt;If any free software project has children as a target group, we (the people at Teckids e.V.) strongly believe it should make contributions by minors as easy as its usage. This involves caring about all legal documents that might get in the way.&lt;/p&gt;

&lt;p&gt;In this podium, we would like to raise some awareness and discuss experiences, ideas, possibilities, and the like in order to make the FOSS world a good place for everyone, independent of their age.&lt;/p&gt;</description>
        <persons>
          <person id="2214">Dominik George</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6098.php">Submit feedback</link>
        </links>
      </event>
      <event id="6755">
        <start>10:00</start>
        <duration>00:25</duration>
        <room>UA2.114 (Baudoux)</room>
        <slug>usability_survey_of_licenses</slug>
        <title>A Usability Survey of Free Software Licenses</title>
        <subtitle/>
        <track>Legal and Policy Issues</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;We want software creators to use FOSS licenses.  We also know people make mistakes in the process, or don't even try because they've heard it's "too complicated."  Just like with software, we would do well to study these failures and use them as opportunities to improve the usability of our licenses.  This talk aims to start that process by identifying known problems and considering some possible solutions.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;Usability issues that will be addressed in this talk include:&lt;/p&gt;

&lt;ul&gt;
&lt;li&gt;License presentation&lt;/li&gt;
&lt;li&gt;Where a work's license is declared&lt;/li&gt;
&lt;li&gt;How a work's license is declared&lt;/li&gt;
&lt;li&gt;How creators learn to apply a license&lt;/li&gt;
&lt;li&gt;License drafting&lt;/li&gt;
&lt;/ul&gt;


&lt;p&gt;In his work as the FSF's license compliance engineer, Brett had the opportunity to investigate the licensing of many projects for information.  He saw what creators do, both right and wrong.  He was also deeply engaged in the drafting processes for GPLv3 and MPLv2, and was able to compare and contrast where the resulting licenses succeeded and fell short at improving usability.&lt;/p&gt;</description>
        <persons>
          <person id="5118">Brett Smith</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6755.php">Submit feedback</link>
        </links>
      </event>
      <event id="6741">
        <start>10:30</start>
        <duration>00:25</duration>
        <room>UA2.114 (Baudoux)</room>
        <slug>ai_right_to_be_forgotten</slug>
        <title>Artificial intelligence dealing with the right to be forgotten</title>
        <subtitle/>
        <track>Legal and Policy Issues</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;The right to be forgotten subsequens the ruling of privacy law, encountering difficulties in terms of defining its applicability in the context of continuous tech evolution. Artificial intelligence development particularly raises problems due to the nature of machine learning and the obvious differences between the memory process of humans and AI systems. The law does not have an answer apart from the general ruling of the right to be forgotten, lacking a particular focus on the context of AI nature and applicability. How does an analysis of the current legislation look like and also what can one implement de lege ferenda in order to assure the required attention to the AI context?&lt;/p&gt;</abstract>
        <description>&lt;p&gt;Privacy law is on the spotlight of the modern rechtsstaat and determined in the doctrine different opinions in how the ruling of it is appropriate. Considering the amplitude of human interactions and the juridical nature of personality rights, it encounters an accelerated evolution. The right to be forgotten, one of the component of this area, reached its first peak due to the ruling of the European Court of Justice in the matter of Google's search engine, stating that as a data controller it has to conform to the 95/46/EC Directive, the states being held to implement those principles in the national legislation.&lt;/p&gt;

&lt;p&gt;Considering the evolution of technology, a question that arises is how do the states and international entitites de lege lata apply the notion of the right to be forgotten in the context of artificial intelligence and also what could be done in order to have consistent juridical norms in this area. &lt;/p&gt;

&lt;p&gt;The right to be forgotten will be analysed as concept, juridical nature, doctrine debates regarding this notion and also how does it interfere with artificial intelligence. A description of the psychological memory and AI system of "remembering" will be done in comparison, emphasising the aspects that could be relevant in the compliance with the spirit of the right to be forgotten. Considering that the fundamental differences between how human and machine learning memory processes work, it will be determined a common ground of how can deletion be considered an act of forgetting. Also, the analysis will continue on the path of finding potential legal and policy adaptations to the current statutory law.&lt;/p&gt;</description>
        <persons>
          <person id="5091">Cristina Rosu</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6741.php">Submit feedback</link>
        </links>
      </event>
      <event id="6573">
        <start>11:00</start>
        <duration>00:25</duration>
        <room>UA2.114 (Baudoux)</room>
        <slug>gdpr_identity_management</slug>
        <title>Capture the GDPR with Identity management</title>
        <subtitle>Crafting Identity management tool to handle GDPR requirements</subtitle>
        <track>Legal and Policy Issues</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Capture the GDPR with Identity management
A new era of Data Privacy begins this year and May approaches unstoppably. The media present the GDPR on a daily basis in volumes no one has expected. The whole commercial sector is hyped with articles about the GDPR, recommendations, warnings and in the end MYTHS! The GDPR is not only multinational corporations’ concern any more. Individuals and small entrepreneurs are looking for the answers too. This makes space for speculations and many partial solutions are offered in a form of a GDPR project draft templates or migration of processing into the new safe environment without appropriate paperwork. Even software solutions usually offer only partial safety measures and you will need a bunch of them to fulfill the GDPR project.
A complete solution exists only as cooperation of legal person analyzing interpretation of EU legislative and IT technician able to incorporate those requirements into daily operations. The complete solution still does not mean 100% compliance because there are so many threats you can never be utterly safe from.
This presentation will tell what you must not omit to be compliant, how to give effects to the rights of data subjects and how to craft your GDPR solution. We will discuss lawful basis for data processing, consent requirements and tools able to manage them effectively. In the end, we may think about the design of identity management tool that combines the advantages of identity management into one solution dealing with various GDPR issues.
Included GDPR areas in light of Identity management: Lawful basis and consent management, risk assessment, data breach tool, DPO’s control tool and data subject’s rights control tool.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;I intent to speak about how to think about GDPR solution, what is required and how to achieve it by either customizing existing tool or designing a brand new tool of your own preferences. As a lawyer working amid programmers, in this speech I will be considering both fields of view and looking for conjunctions. Touched areas of speech are lawful basis management, consent management, risk assessment, data breaches, DPO and rights of data subjects.&lt;/p&gt;</description>
        <persons>
          <person id="5005">Juraj Benculak</person>
        </persons>
        <links>
          <link href="https://evolveum.com/blog/author/juraj-benculak/">May blog about GDPR</link>
          <link href="https://submission.fosdem.org/feedback/6573.php">Submit feedback</link>
        </links>
      </event>
      <event id="6724">
        <start>11:30</start>
        <duration>00:25</duration>
        <room>UA2.114 (Baudoux)</room>
        <slug>licenses_and_contracts_eu_us</slug>
        <title>Comparative Law of Licenses and Contracts in the EU and US</title>
        <subtitle/>
        <track>Legal and Policy Issues</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;This session will be a panel of lawyers from the US, the UK, and Germany. We will take on the evergreen question "it is a license or a contract," describing how their respective system distinguishes the two. The panelists will then apply these legal concepts to some exemplar free software licenses and offer predictions on how and to what extent one accused of breaching the license would be held accountable.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;This session will be a panel of lawyers from the US (Pamela Chestek), the UK (Andrew Katz) and a yet-to-be-named civil law EU country (hopefully Miriam Ballhausen, but she hasn't confirmed). We will take on the evergreen question "it is a license or a contract" under each of the panelists respective legal regimes. Each panelist will begin by surveying their legal system's general jurisprudence on the definition of license and contract and describing how their respective system distinguishes the two.  The panelists will then apply these legal concepts to some exemplar free software licenses and offer predictions on how and to what extent one accused of breaching the license would be held accountable.&lt;/p&gt;</description>
        <persons>
          <person id="1245">Pamela Chestek</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6724.php">Submit feedback</link>
        </links>
      </event>
      <event id="6592">
        <start>12:00</start>
        <duration>00:25</duration>
        <room>UA2.114 (Baudoux)</room>
        <slug>governance_meets_community</slug>
        <title>Governance Meets Community</title>
        <subtitle>Creating an internal group of empowered open source advocates</subtitle>
        <track>Legal and Policy Issues</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;We've been working on building a community of open source advocates within our company who feel empowered to make policy decisions, help with tooling recommendations, and teach others about the importance of open source. Come learn best practices we've learned around letting our advocates grow policy that makes sense for their individual departments and teams while still participating in a company-wide community.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;We have built an internal community of open source advocates within a 100,000+ person company. This community represents people in all different regions of the world, levels of the organization, departments, divisions, and teams. They have different views and ways they are managing using, contributing to, and releasing open source software in their individual arenas. We have provided them guidance on governance, policy, tooling, and community, and have let them do their advocacy from there. They are able to amplify our messages around open source while also providing an individual face and perspective on the issues they face. We've learned a lot about how to approach these internal community topics as well as balancing policy directives with individual decision-making. We'd like to share with you what we've learned.&lt;/p&gt;</description>
        <persons>
          <person id="5041">Carol Smith</person>
        </persons>
        <links>
          <link href="https://www.fossygirl.com/speaking/">My overall speaking experience. Not specific to this topic; this is a new talk I have not given at any previous conferences.</link>
          <link href="https://media.libreplanet.org/u/libreplanet/m/the-set-of-programmers-how-math-restricts-us/">Video of my speaking style at LibrePlanet 2017. Again, not specific to this talk topic. </link>
          <link href="https://submission.fosdem.org/feedback/6592.php">Submit feedback</link>
        </links>
      </event>
      <event id="6793">
        <start>12:30</start>
        <duration>00:25</duration>
        <room>UA2.114 (Baudoux)</room>
        <slug>harmonize_or_resist</slug>
        <title>Harmonize or Resist?</title>
        <subtitle>A Global Survey of Strategies for Freedom and Free Software</subtitle>
        <track>Legal and Policy Issues</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;There's a lot of pressure from the US (and some of it's allies) to "harmonize" with American ideas about patents and copyrights. The response by different nations has been wildly different -- some have chosen to play along while others have chosen to resist. What makes sense for one country won't make sense for another and it's all in the details. This talk examines existing legal patterns, the state of local economies and varying trade relationships in an effort to survey what kinds of resistance are possible or effective.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;There's a lot of pressure from the US (and some of it's allies) to "harmonize" with American ideas about patents and copyrights. The response by different nations has been wildly different -- some have chosen to play along while others have chosen to resist. What makes sense for one country won't make sense for another and it's all in the details. This talk examines existing legal patterns, the state of local economies and varying trade relationships in an effort to survey what kinds of resistance are possible or effective.&lt;/p&gt;

&lt;p&gt;These issues have implications for not only free software activists, but for anyone who is concerned about local sovereignty and freedom of expression. Laws are written for the powerful to help them maintain their power, and resistance is always difficult. But what if we could share not only our code, but our strategies for passing laws, rearranging policy and carving out a safe place for free software and free culture to flourish?&lt;/p&gt;

&lt;p&gt;This is a top level survey of the global state of software patents and copyright law. Both local and global policies affect our ability to build things that are needful or locally useful, even when they aren't profitable. Local innovation is our best chance to solve many of our local problems, so let's get to it!&lt;/p&gt;</description>
        <persons>
          <person id="698">Deb Nicholson</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6793.php">Submit feedback</link>
        </links>
      </event>
      <event id="6624">
        <start>13:00</start>
        <duration>00:25</duration>
        <room>UA2.114 (Baudoux)</room>
        <slug>outsourcing_distribution_requirements</slug>
        <title>Outsourcing Source Code Distribution Requirements</title>
        <subtitle/>
        <track>Legal and Policy Issues</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;A well-known obligation in some FOSS licenses is the requirement to provide "complete corresponding source code" (CCSC). After the initial collection and packaging of the CCSC, its provision imposes a burden that may persist for a very long time. Ensuring that the CCSC is always available is not a simple matter, especially considering that the original development team might change structure, people might be replaced or change roles, legal entities may disappear, etc.&lt;/p&gt;

&lt;p&gt;In this talk we will present the possibility of using Software Heritage, an independent, non-profit third party, in order to outsource CCSC provision. As part of the exploration, we will review the legal obligations in popular copyleft licenses, explain the burden of long-term CCSC hosting, describe the hosting infrastructure in place, and propose a publishing workflow that might help FOSS producers painlessly comply with the licenses.&lt;/p&gt;</abstract>
        <description></description>
        <persons>
          <person id="66">Stefano Zacchiroli</person>
          <person id="1286">Alexios Zavras</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6624.php">Submit feedback</link>
        </links>
      </event>
      <event id="6786">
        <start>13:30</start>
        <duration>00:25</duration>
        <room>UA2.114 (Baudoux)</room>
        <slug>sites_communicate_licensing</slug>
        <title>People can't care when they don't know</title>
        <subtitle>Improving how major sites communicate licensing information</subtitle>
        <track>Legal and Policy Issues</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;We go through a lot of work and angst as a community over licensing --
what is free, what is not, what is open source, what is compatible
with what, which software is to use which license. Then, after all the
work put into these decisions, the result is hidden away, only to be
seen or become relevant in the event of some legal challenge or
insider decision. Licensing information is by and large not
sufficiently communicated to end users, even though we are trying to
build a movement of users who prefer freely licensed software.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;Two years ago in this Devroom, I talked about license choosers like
Github's choosealicense.com, and how they might influence license
selection for new projects. In response to that talk, Github made some
important improvements. How are they doing now, and what about other
sites and systems where users frequently obtain software, like Google
Play, the Chrome Web Store, and the Firefox Add-ons library? Too often
we find that such sites do not display license information at all in
key places, or if they do, it's in a way that is not as clear or as
strong as many of us in the free software movement would like to see.
How can users prefer free software when they aren't given the info
they need to choose it? I'll survey the scene, highlight some
examples, and talk about how they can be addressed while considering
the objections/concerns of the site operators.&lt;/p&gt;</description>
        <persons>
          <person id="1577">John Sullivan</person>
        </persons>
        <links>
          <link href="http://video.fosdem.org/2016/ud2218a/pick-a-peck-of-license-pickers.mp4">Choose a License talk</link>
          <link href="http://">http://</link>
          <link href="https://submission.fosdem.org/feedback/6786.php">Submit feedback</link>
        </links>
      </event>
      <event id="6761">
        <start>14:00</start>
        <duration>00:25</duration>
        <room>UA2.114 (Baudoux)</room>
        <slug>public_money_public_code</slug>
        <title>Public money, public code, the Italian way</title>
        <subtitle>Hacking Italian Administrations to get to the code (in a legal way)</subtitle>
        <track>Legal and Policy Issues</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;FSFE has recently launched the campaign "Public Money, Public code”, which promotes legislation requiring that publicly financed software developed for the public sector is made publicly available under a Free and Open Source Software licence. However, under the Italian Digital Administration Code, we already have a provision (amended in 2016) which seems to have similar effects. We tried to use it as a legal hack to make available the source code of publicly financed whistleblowing software.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;The campaign "Public Money, Public code”, recently launched by the FSFE, aims at convincing the representatives to propose legislation requiring that publicly financed software developed for the public sector is made publicly available under a Free and Open Source Software licence. However, under the Italian Digital Administration  Code (d.lgs 82/2005) we already have a provision (amended in 2016), in art. 69, which states that all public administrations have a duty to make available custom-made publicly financed software, together with the documentation, and to release it under an open licence, in free use, to other public administrations and other legal entities (with a few exceptions, regard public security, national defense and the electoral process). We tried to use art. 69 as a legal hack to make available the source code of publicly financed whistleblowing software, from some municipalities and publicly controlled companies. The outcome haw been not entirely satisfactory.&lt;/p&gt;

&lt;p&gt;The talk will be given by Giovanni Battista Gallus (fellow) and Fabio Pietrosanti (President) of the Hermes Center for Transparency and Digital Human Rights. The mission of the Hermes Center is to promote and develop in the society the awareness of and the attention to transparency and accountability, be they related to the society-at-large or not. Our goal is to increase the citizens’ involvement in the management of matters of public interest and to boost the active participation of workers and employees to the correct management of corporations and companies they work for.&lt;/p&gt;

&lt;p&gt;Giovanni Battista Gallus:
Lawyer, ISO27001 Lead Auditor, freesoftware advocate, Former President of @CircoloGT, Nexa Fellow. ITLaw, privacy, security &amp;amp; drones.&lt;/p&gt;

&lt;p&gt;Copyright, Criminal, Data Protection/Privacy and IT and New Technologies law are his main areas of expertise. In the last two years, he is devoting a significant part of his pratice to the legal aspects of UAVs (drones) After a cum laude degree in Law in Italy, he moves to Great Britain for the Master of Laws in Maritime Law e Information Technology Law at the University College London – UCL. Afterwhile, he earns a PhD. In 2009 he obtains the European Certificate on Cybercrime and Electronic Evidence (ECCE). He is ISO 27001:2005 Certified Lead Auditor (Information Security Management System). Member of the Bar of Cagliari since 1996, admitted to the Supreme Court since 2009, he is a member of the Department “Informatica Giuridica” at the Università Statale of Milan and he is a teacher at the Post-Graduate Course in Digital crime and Digital Forensics. Fellow of Nexa Center on Internet e Society and of the Hermes Center for Transparency and Digital Human Rights. Author of several publications on the above mentioned areas and speaker at the main national and international congresses, he sides his legal profession an intense teaching activity, mainly in the field of copyright, Free/Open Source Software, data protection, IT security and digital forensics. Former President of Circolo dei Giuristi Telematici, founded in 1998, first initiative to gather IT law experts in Italy.&lt;/p&gt;

&lt;p&gt;Fabio Pietrosanti:
Fabio Pietrosanti has been part of the hacking digital underground with the nickname “naif” since 1995, while he’s been a professional working in digital security since 1998. President and co-founder of the Hermes Center for Transparency and Digital Human Rights, he is active in many projects to create and spread the use of digital tools in support of freedom of expression and transparency.&lt;/p&gt;

&lt;p&gt;Member of Transparency International Italy, owner of Tor’s anonymity nodes, Tor2web anonymous publishing nodes, he is among the founders of the anonymous whistleblowing GlobaLeaks project, nowadays used by investigative journalists, citizen activists and the public administration for anti-corruption purposes. He is an expert in technological innovation in the field of whistleblowing, transparency, communication encryption and digital anonymity.&lt;/p&gt;

&lt;p&gt;As a veteran of the hacking and free software environment, he has participated to many community projects such as Sikurezza.org, s0ftpj, Winston Smith Project, Metro Olografix, among others. Professionally, he has worked as network security manager, senior security advisor, entrepreneur and CTO of a startup in mobile voice encryption technologies.&lt;/p&gt;</description>
        <persons>
          <person id="3467">Giovanni Battista Gallus</person>
          <person id="5119">Fabio Pietrosanti (naif)</person>
        </persons>
        <links>
          <link href="https://www.hermescenter.org/">Hermes Center Website</link>
          <link href="https://eclecticismnow.wordpress.com/2017/11/12/whistleblowing-comune-di-venezia-violazione-del-riuso-secondo-cad-art-69/">[Italian] Asking for the code to the Municipality of Venice</link>
          <link href="https://eclecticismnow.wordpress.com/2017/06/02/quando-il-software-in-riuso-non-e-opensource/">[Italian] Asking for the code to the Municipality of Naples</link>
          <link href="http://www.ifosslr.org/ifosslr/article/download/84/142">Article by Simone Aliprandi and Carlo Piana, FOSS in the Italian public administration: fundamental law principles (2013)</link>
          <link href="http://www.array.eu">Professional website</link>
          <link href="https://submission.fosdem.org/feedback/6761.php">Submit feedback</link>
        </links>
      </event>
      <event id="6579">
        <start>14:30</start>
        <duration>00:25</duration>
        <room>UA2.114 (Baudoux)</room>
        <slug>future_of_copyleft</slug>
        <title>The Future of Copyleft: Data and Theory</title>
        <subtitle/>
        <track>Legal and Policy Issues</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Using (copylefted!) data from the 32 repositories and 2.5M projects covered by libraries.io, we'll survey the state of copyleft. This will include the growth of AGPL, the reciprocal scope of the GPL, and what stacks copyleft has been most successful in. We'll then use the data to inform a look at theory and discuss where copyleft might be going: where is copyleft's success? where and how is that relevant in the modern software landscape? what directions might future copyleft licenses take?&lt;/p&gt;</abstract>
        <description>&lt;p&gt;General note: scheduling permitting (they're also running a dev room), I may be joined by Andrew Nesbitt or Ben Nickolls, co-founders of Libraries.io.&lt;/p&gt;

&lt;p&gt;Many of the various assessments of license "popularity" have been skewed either by using a very limited data set (e.g., Debian, Fedora, which cover ~1/100th of FOSS) or by being proprietary/unreproducible (Black Duck, etc.) In this talk I'll discuss another open data source by diving into the licensing data from Libraries.io, which we believe to be the largest open repository of information about &lt;em&gt;packaged&lt;/em&gt; FOSS. Because it includes dependency data, it can tell us not only about numeric usage, but also about relative importance and position in the stack of various licenses; and since it has a notion of "stack" (tied to repositories) it can inform some of our intuitions about how license usage varies by stack. We'll use this to assess&lt;/p&gt;

&lt;p&gt;(The biggest shortcoming of the Libraries.io data is that, because there are no "repos" per se, it does not cover C/C++/core operating system components; I'll also discuss this in the talk.)&lt;/p&gt;

&lt;p&gt;After discussing the current state of copyleft using data, we'll discuss what the future of copyleft might look like. This discussion will be informed by the data, but not limited to the data. Among other things, I'll discuss the theoretical value of copyleft in a world where FOSS has "won", indicated demand for copyleft in the culture and data space (e.g., institutional partners pushing for data in CC 4 &amp;amp; CDLA; interest in non-licensing solutions), License Zero, the legal challenges of copyleft in the SaaS space, and the growing concerns about developer sustainability. [Tidelift, my company, is working in this sustainability space, but obviously I'll avoid making the talk a pitch for the company.]&lt;/p&gt;

&lt;p&gt;I will likely conclude (contingent on some further data analysis) that there continues to be interest and demand for copyleft, but that a major driver of the perceived (and in some cases very real) decline of GPL + friends is a result of the inadequacy of our current copyleft legal tools. My hope is that this will be a call to action to the community to continue innovating around copyleft.&lt;/p&gt;</description>
        <persons>
          <person id="5034">Luis Villa</person>
        </persons>
        <links>
          <link href="http://libraries.io">Data set.</link>
          <link href="http://lu.is/blog/category/licensing/">Previous writings on licensing.</link>
          <link href="http://lu.is/talks/">Previous talks on FOSS.</link>
          <link href="http://">http://</link>
          <link href="https://submission.fosdem.org/feedback/6579.php">Submit feedback</link>
        </links>
      </event>
      <event id="6794">
        <start>15:00</start>
        <duration>00:25</duration>
        <room>UA2.114 (Baudoux)</room>
        <slug>understanding_usc_501</slug>
        <title>Understanding 26 U.S.C. § 501, and Organizational Governance</title>
        <subtitle>... and why understanding all this matters outside the U.S.</subtitle>
        <track>Legal and Policy Issues</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;We often hear about the charitable organizations registered in the United States Federal tax system, but talking about the implications is sometimes taboo.
I'll try and talk about these issues openly, and discuss some of the consequences (both +ive &amp;amp; -ive) for public software.
I'll provide a list of a few well-known organizations, and explain why it both matters and doesn't.
Lastly I'll present some reporting that I did while researching this presentation.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;We often hear about the charitable organizations registered in the United States Federal tax system, but talking about the implications is sometimes taboo.
I'll try and talk about these issues openly, and discuss some of the consequences (both +ive &amp;amp; -ive) for public software.
I'll provide a list of a few well-known organizations, and explain why it both matters and doesn't.
Lastly I'll present some reporting that I did while researching this presentation.&lt;/p&gt;</description>
        <persons>
          <person id="2026">James Shubin</person>
        </persons>
        <links>
          <link href="https://archive.fosdem.org/2016/schedule/event/tl_dr_legal_strategy/">A previous legal talk I gave in 2016</link>
          <link href="https://submission.fosdem.org/feedback/6794.php">Submit feedback</link>
        </links>
      </event>
      <event id="6789">
        <start>15:30</start>
        <duration>00:25</duration>
        <room>UA2.114 (Baudoux)</room>
        <slug>open_data_licenses</slug>
        <title>What's the difference between all those open data licenses?</title>
        <subtitle/>
        <track>Legal and Policy Issues</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;My talk will briefly review the major open data licenses including the differences between them and their interaction with free software licenses. Particular emphasis will be placed on thier application to databases.&lt;/p&gt;

&lt;p&gt;There are only a few popular open data licenses with a focus on open database licensing, but there is very little guidance on the differences between them. This talk will explain the differences between them, why they exist, and when you might prefer one over the other. I will also discuss sui generis database right, why it exists and how is it different than the traditional copyrights.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;This talk will be a whirlwind introduction to the common open data licenses that exist.&lt;/p&gt;

&lt;p&gt;I will outline the the major open data licenses including:
* Creative Commons Zero Public Domain Dedication (CC0)
* Open Data Commons Public Domain Dedication and Licence (PDDL)
* Open Data Commons Attribution License (ODC-By)
* Open Data Commons Open Database License (ODbL)
* Creative Commons Attribution (CC BY)
* Creative Commons Attribution-ShareAlike (CC BY-SA)&lt;/p&gt;

&lt;p&gt;Will also review some lesser known open data licenses including the recently released licenses created by the Linux foundation. We will look at what uses the authors may have had in mind that motivated them to create the licenses.
* Community Data License Agreement – Permissive, Version 1.0
* Community Data License Agreement – Sharing, Version 1.0
* United Kingdom's Open Government License
* Canadian Open Government License.&lt;/p&gt;

&lt;p&gt;We will discuss why do open data licenses exist and how are they different then free software licenses. We will look at the structure of the licenses to see the legal differences the licenses grant and how they operate. For example will discuss which of these are public domain dedications, licenses, or agreements. We will also talk about when or if that even matters.&lt;/p&gt;

&lt;p&gt;After looking at the structure of the licenses we will turn to looking whats differences between the licenses matter for content creators and ask does it matter which license you use.&lt;/p&gt;

&lt;p&gt;We will also delve into special considerations of database licensing like the protection and use of personal data, and how the "thin" copyright protection provided to databases impacts the design of open data licenses.&lt;/p&gt;

&lt;p&gt;Finally we will ask do you need to use an open data license in your free software project?&lt;/p&gt;</description>
        <persons>
          <person id="3893">Marc Jones</person>
        </persons>
        <links>
          <link href="http://">http://</link>
          <link href="https://submission.fosdem.org/feedback/6789.php">Submit feedback</link>
        </links>
      </event>
      <event id="6963">
        <start>16:00</start>
        <duration>00:25</duration>
        <room>UA2.114 (Baudoux)</room>
        <slug>legal_issues_with_open_fonts</slug>
        <title>Gutenberg to Google Fonts: the sordid history of typeface licensing issues</title>
        <subtitle>Legal issues for projects working with open fonts</subtitle>
        <track>Legal and Policy Issues</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Fonts sit at a peculiar crossroads in the software license-compliance world. They contain executable instructions as well as static, visual data. They are binary files that, even when "open", are often shipped without source code. They are sensitive to namespace collision problems but are only exposed in user interfaces by name. The files themselves are governed by copyright, but the design they encode is not considered copyrightable in the US and other jurisdictions. Furthermore, the typemaking industry has long vacillated on the appropriateness of reviving, reusing, and extending earlier works as new designs. This talk provides an overview of the intellectual-property law and the community norms that concern sharing, reusing, and extending typeface designs. It will help developers navigate the intellectual-property and license-compliance issues they may encounter when using and redistributing free-software and open-source fonts.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;Fonts sit at a peculiar crossroads in the software license-compliance world. They contain executable instructions as well as static, visual data. They are binary files that, even when "open", are often shipped without source code. They are sensitive to namespace collision problems but are only exposed in user interfaces by name. The files themselves are governed by copyright, but the design they encode is not considered copyrightable in the US and other jurisdictions. Furthermore, the typemaking industry has long vacillated on the appropriateness of reviving, reusing, and extending earlier works as new designs.&lt;/p&gt;

&lt;p&gt;This talk provides an overview of the intellectual-property law and the community norms that concern sharing, reusing, and extending typeface designs. It highlights several specific issues relevant to modern digital font projects:&lt;/p&gt;

&lt;p&gt;• The law has struggled to keep up with industry practices on the subject of copying a competitor's type design. In the cold-metal era, foundries routinely copied and sold designs originating from the competition, even mechanically reproducing metal type in bulk. When digital fonts arrived in the 20th Century, the files themselves were originally not regarded as intellectual property, and wholesale copying picked up once again. Today, the files are considered copyrighted, but the designs are not. This can leave users in an uncertain position, as modern tools allow designs to be copied digitally, without copying the original file, and the law has not drawn clear lines around what practices are permissible.
• Reviving a historical typeface is generally considered an acceptable practice if the design process begins with primary materials (such as metal types, proofs, or out-of-copyright prints). There is fierce disagreement, however, about how far in the past a designer must go before a typeface is considered fair game; revivals of typefaces that were "works for hire" by a corporate foundry or printer in particular are controversial because ownership of the intellectual property is debatable. Moreover, there is disagreement about how the original designers of a typeface can and should be credited in a revival, particularly when the revival makes alternations and updates. Users need to be particularly aware of these issues when selecting typefaces for branding and advertising purposes, which can attract public criticism.
• Font names can attract more attention than the visual design itself, for the simple reason that installed fonts are, traditionally, searchable and accessible on computer systems only by their name. Name collisions between fonts are increasingly common, yet little effort has gone into addressing these collisions through trademark law.
• The leading license used for free-software fonts, the SIL Open Font License (OFL), is often misunderstood, and those misunderstandings can place developers and users of open fonts in a bind on compliance issues. For example, the OFL does not require source-code availability, but it does include restrictions limiting the circumstances under which the fonts can be sold. It also includes an optional clause that, at the licensor's discretion, requires users to change the user-visible name of the font if any alteration is made to the binary, including common practices like subsetting the font to deliver it over the web. Downstream projects that user OFL-licensed fonts and assume that the OFL is broadly compatible with common free-software licenses may not be aware when license-compliance problems occur.&lt;/p&gt;

&lt;p&gt;There are no easy answers for resolving these issues in free software, but this talk will provide developers and communities with advice for identifying and coping with licensing issues relating to the fonts that they utilize in their projects.&lt;/p&gt;</description>
        <persons>
          <person id="4935">Nathan Willis</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6963.php">Submit feedback</link>
        </links>
      </event>
      <event id="7087">
        <start>16:30</start>
        <duration>00:25</duration>
        <room>UA2.114 (Baudoux)</room>
        <slug>organizers_panel</slug>
        <title>Organizer's Panel</title>
        <subtitle/>
        <track>Legal and Policy Issues</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;The Legal and Policy Issues DevRoom organizers facilitate an open discussion of pressing topics.&lt;/p&gt;</abstract>
        <description></description>
        <persons>
          <person id="418">Tom Marble</person>
          <person id="441">Bradley M. Kuhn</person>
          <person id="448">Karen Sandler</person>
          <person id="583">Richard Fontana</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/7087.php">Submit feedback</link>
        </links>
      </event>
    </room>
    <room name="UA2.220 (Guillissen)">
    </room>
    <room name="UB2.147">
      <event id="6218">
        <start>09:30</start>
        <duration>02:00</duration>
        <room>UB2.147</room>
        <slug>cert_lpi_3</slug>
        <title>LPI Exam Session 3</title>
        <subtitle/>
        <track>Certification</track>
        <type>certification</type>
        <language/>
        <abstract>&lt;h3&gt;LPI offers discounted certification exams at FOSDEM&lt;/h3&gt;</abstract>
        <description>&lt;p&gt;As in previous years, the Linux Professional Institute (LPI) will offer discounted certification exams to FOSDEM attendees.
LPI offers level 1, level 2 and level 3 certification exams at FOSDEM with an almost &lt;strong&gt;50% discount&lt;/strong&gt;.&lt;/p&gt;

&lt;p&gt;For further information and instructions see &lt;a href="https://fosdem.org/certification"&gt;https://fosdem.org/certification&lt;/a&gt;.&lt;/p&gt;</description>
        <persons>
          <person id="1083">LPI Team</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6218.php">Submit feedback</link>
        </links>
      </event>
      <event id="6220">
        <start>12:00</start>
        <duration>01:00</duration>
        <room>UB2.147</room>
        <slug>cert_libreoffice_1</slug>
        <title>LibreOffice Exam Session 1</title>
        <subtitle/>
        <track>Certification</track>
        <type>certification</type>
        <language/>
        <abstract>&lt;p&gt;LibreOffice Certifications are designed to recognize professionals in the areas of development, migrations and trainings who have the technical capabilities and the real-world experience to provide value added services to enterprises and organizations deploying LibreOffice on a large number of PCs.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;In the future, LibreOffice Certifications will be extended to Level 1 and Level 2 Support professionals.&lt;/p&gt;

&lt;p&gt;The LibreOffice Certification is not targeted to end users, although Certified Training Professionals will be able to provide such a service upon request (although not as a LibreOffice Certification). In general, end user certification is managed by organizations with a wider reach such as the Linux Professional Institute.&lt;/p&gt;</description>
        <persons>
          <person id="2876">LibreOffice Team</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6220.php">Submit feedback</link>
        </links>
      </event>
      <event id="6221">
        <start>13:30</start>
        <duration>01:00</duration>
        <room>UB2.147</room>
        <slug>cert_libreoffice_2</slug>
        <title>LibreOffice Exam Session 2</title>
        <subtitle/>
        <track>Certification</track>
        <type>certification</type>
        <language/>
        <abstract>&lt;p&gt;LibreOffice Certifications are designed to recognize professionals in the areas of development, migrations and trainings who have the technical capabilities and the real-world experience to provide value added services to enterprises and organizations deploying LibreOffice on a large number of PCs.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;In the future, LibreOffice Certifications will be extended to Level 1 and Level 2 Support professionals.&lt;/p&gt;

&lt;p&gt;The LibreOffice Certification is not targeted to end users, although Certified Training Professionals will be able to provide such a service upon request (although not as a LibreOffice Certification). In general, end user certification is managed by organizations with a wider reach such as the Linux Professional Institute.&lt;/p&gt;</description>
        <persons>
          <person id="2876">LibreOffice Team</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6221.php">Submit feedback</link>
        </links>
      </event>
      <event id="6222">
        <start>15:00</start>
        <duration>01:00</duration>
        <room>UB2.147</room>
        <slug>cert_libreoffice_3</slug>
        <title>LibreOffice Exam Session 3</title>
        <subtitle/>
        <track>Certification</track>
        <type>certification</type>
        <language/>
        <abstract>&lt;p&gt;LibreOffice Certifications are designed to recognize professionals in the areas of development, migrations and trainings who have the technical capabilities and the real-world experience to provide value added services to enterprises and organizations deploying LibreOffice on a large number of PCs.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;In the future, LibreOffice Certifications will be extended to Level 1 and Level 2 Support professionals.&lt;/p&gt;

&lt;p&gt;The LibreOffice Certification is not targeted to end users, although Certified Training Professionals will be able to provide such a service upon request (although not as a LibreOffice Certification). In general, end user certification is managed by organizations with a wider reach such as the Linux Professional Institute.&lt;/p&gt;</description>
        <persons>
          <person id="2876">LibreOffice Team</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6222.php">Submit feedback</link>
        </links>
      </event>
    </room>
    <room name="UB2.252A (Lameere)">
    </room>
    <room name="UD2.119">
    </room>
    <room name="UD2.120 (Chavanne)">
    </room>
    <room name="UD2.218A">
    </room>
    <room name="UD2.Corridor">
    </room>
    <room name="J1.106">
    </room>
  </day>
</schedule>
`
