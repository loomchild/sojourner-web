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
      <event id="6975">
        <start>10:30</start>
        <duration>00:25</duration>
        <room>AW1.121</room>
        <slug>debugging_tools_cachegrind</slug>
        <title>Simulating Multilevel Caches in Cachegrind</title>
        <subtitle>Modelling L2 and L3 CPU caches separately in Cachegrind for both x86 and ARM architectures for performance profiling of Isambard HPC system</subtitle>
        <track>Debugging tools</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Systems with large amounts of multi-level cache available require the ability
  to profile cache performance at each layer, as there remains a significant
  performance disparity between L2 and L3 caches. An example of such a system
  and the focus of this work is the new Cavium ThunderX2 supercomputer at the
  GW4 Isambard project. This paper intends to detail the methodology used to
  extend the capabilities of the Valgrind tool: Cachegrind. This extension will
  enable it to model both the L2 and L3 caches separately, as opposed to as a
  single last level cache. This support will be added for both the ARMv8
  architecture, in order to model performance on the Isambard supercomputer, and
  in addition x86_64, for comparative purposes. As a result of this extension,
  the Isambard project will be able to optimise frequently used programs, in
  order to reduce CPU time used and therefore improve throughput on the system.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;1) Current state of Valgrind, Cachegrind  (possibly state of ARM?)
2) Adding the extra cache layer
3) State of Thunder X2 valgrind/cachegrind&lt;/p&gt;</description>
        <persons>
          <person id="5189">Matthew Coles</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6975.php">Submit feedback</link>
        </links>
      </event>
      <event id="6611">
        <start>11:00</start>
        <duration>00:25</duration>
        <room>AW1.121</room>
        <slug>debugging_tools_valgrind_regalloc</slug>
        <title>Valgrind register allocator overhaul</title>
        <subtitle/>
        <track>Debugging tools</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Register allocator is a key component in Valgrind's VEX subsystem. Superficially it only translates virtual registers to the real ones. But is that really all? What actually happens under the covers, what algorithms are at play here and what are the constraints under which it operates?&lt;/p&gt;

&lt;p&gt;Last year, a major overhaul of the Valgrind VEX register allocator has been done, resulting in a new version v3 which is now used by Valgrind. In addition to a new design, new register allocation algorithms have been also implemented, producing faster and smaller code.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;A brief introduction to Valgrind VEX subsystem will be given, to put the register allocator component and its interfaces into context.&lt;/p&gt;

&lt;p&gt;Then the operation of register allocator v3 will be presented in an illustrative way, including major data structures.
Code snippets from amd64 and aarch64 architectures will be used for examples. Brief comparison with v2 will be also given.&lt;/p&gt;

&lt;p&gt;After that, several algorithms will be described which contribute to the success of v3; again showing their operation on graphics.&lt;/p&gt;

&lt;p&gt;Finally there will be some time for discussion and feedback gathering.&lt;/p&gt;</description>
        <persons>
          <person id="1732">Ivo Raisr</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6611.php">Submit feedback</link>
        </links>
      </event>
      <event id="6934">
        <start>11:30</start>
        <duration>00:40</duration>
        <room>AW1.121</room>
        <slug>debugging_tools_memcheck</slug>
        <title>Valgrind's Memcheck tool vs Optimising Compilers</title>
        <subtitle>Keeping the false positive rate under control</subtitle>
        <track>Debugging tools</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;The ongoing work to improve the accuracy of definedness tracking in the face of newer more aggressively optimizing compilers.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;Valgrind's Memcheck tool reports various kinds of errors.  One of the most
important ones are those where an if-conditions or a memory address uses
undefined data.  To do this, it tracks the definedness of every bit in the
process, and "follows" any undefinedness through arithmetic operations (Add,
Sub, Mul, Or, Xor, etc).&lt;/p&gt;

&lt;p&gt;This tracking is expensive and so Memcheck makes compromises, trading off
exactness for speed.  That has worked well for many years.  However, as
compilers become more aggressive, this works less and less well.  In
particular, Memcheck now often reports false errors in optimised code from
GCC 6, Clang 4, and later versions.  This is a problem because one of
Memcheck's main strengths is the accuracy of its analyses.&lt;/p&gt;

&lt;p&gt;In this talk I'll present my ongoing work to improve accuracy of definedness
tracking.  I'll mostly talk about various examples involving integer
addition and comparisons, and will avoid gory details of Memcheck's
internals.  I'll also show two problems to which I have no solution.&lt;/p&gt;

&lt;p&gt;The talk should be accessible to anyone with some familiarity of basic
integer arithmetic (add, sub, and/or/xor, etc) and is curious about how
undefinedness "flows" through these operations.  If you like maths and
proving simple theorems, you might enjoy this talk too -- and we'd like
to talk to you!&lt;/p&gt;</description>
        <persons>
          <person id="143">Julian Seward</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6934.php">Submit feedback</link>
        </links>
      </event>
      <event id="6508">
        <start>12:20</start>
        <duration>00:40</duration>
        <room>AW1.121</room>
        <slug>debugging_tools_gdb_tools</slug>
        <title>gdb tools: duel and @PrettyPrinter</title>
        <subtitle/>
        <track>Debugging tools</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;This talk will describe two python extensions for gdb: @PrettyPrinter decorator — an easy approach to writing new pretty printers for your data, and DUEL — a high level data exploration language, a very powerful but easy way of examining complex data structures.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;the goal is basically to introduce https://github.com/vuvova/gdb-tools and to demo its features&lt;/p&gt;</description>
        <persons>
          <person id="1684">Sergei Golubchik</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6508.php">Submit feedback</link>
        </links>
      </event>
      <event id="7066">
        <start>13:05</start>
        <duration>00:40</duration>
        <room>AW1.121</room>
        <slug>debugging_tools_stracing_build</slug>
        <title>Debug your build by tracing and reversing</title>
        <subtitle>stracing your build from sources to binaries</subtitle>
        <track>Debugging tools</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Can you tell exactly which source files are built into your binaries? Any sufficiently large build feels a bit like magic!
Join me to explore how you can debug your build by stracing it and rebuilding a build graph of files and tools transformations.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;Some applications for this knowledge:&lt;/p&gt;

&lt;ul&gt;
&lt;li&gt;better control of which subset of the code you use and depend on.&lt;/li&gt;
&lt;li&gt;general build hygiene and debugging such as pruning obsolete or dead code.&lt;/li&gt;
&lt;li&gt;build optimization&lt;/li&gt;
&lt;/ul&gt;


&lt;p&gt;And answer some questions such as:&lt;/p&gt;

&lt;ul&gt;
&lt;li&gt;if a file is really used or not and where it is used and what for.&lt;/li&gt;
&lt;li&gt;how it was compiled and combined&lt;/li&gt;
&lt;li&gt;what are your build dependencies.&lt;/li&gt;
&lt;/ul&gt;


&lt;p&gt;I will present a TraceCode, a FOSS tool that uses build-time syscalls tracing to reconstruct your build graph.
Using build tracing with strace (disclaimer: &lt;em&gt;I am a small-time contributor to strace&lt;/em&gt; ), you capture a complete &lt;em&gt;trace of all the systems calls&lt;/em&gt; happening during your build.&lt;/p&gt;

&lt;p&gt;The trace is then parsed and processed to reconstruct the &lt;em&gt;build graph&lt;/em&gt; of your binaries as a directed graph of files transformations over tools such as code generators, scripts, compilers, assemblers, linkers, etc. This requires NO modification of your build at all.&lt;/p&gt;

&lt;p&gt;The graph can then be analyzed for fun and profit, including creating &lt;em&gt;fancy dot graphic visualizations&lt;/em&gt; and can help understand exactly which files were built, by what and how they were transformed in multiple steps from sources to  your final binaries.&lt;/p&gt;

&lt;p&gt;As a bonus, I will also present new FOSS extensions that perform similar build reversing but using static analysis only.&lt;/p&gt;</description>
        <persons>
          <person id="4271">Philippe Ombredanne</person>
        </persons>
        <links>
          <link href="https://github.com/nexB/tracecode-build">TraceCode</link>
          <link href="https://submission.fosdem.org/feedback/7066.php">Submit feedback</link>
        </links>
      </event>
      <event id="6496">
        <start>13:50</start>
        <duration>00:25</duration>
        <room>AW1.121</room>
        <slug>debugging_tools_strace_features</slug>
        <title>strace: new features</title>
        <subtitle/>
        <track>Debugging tools</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;strace is a diagnostic, debugging and instructional utility for Linux. It is used to monitor and tamper with interactions
between processes and the Linux kernel, which include system calls, signal deliveries, and changes of process state.
In this talk the maintainer of strace will describe new features implemented since FOSDEM 2017.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;In 2017, several interesting features were implemented within strace project, including
+ syscall specification improvements: new syscall classes, regular expressions, conditional expressions;
+ detailed parsers of netlink protocols;
+ advanced syscall filtering syntax;
+ advanced syscall tampering and filtering with Lua;
+ asinfo: advanced syscall information tool;
+ gdbserver backend.&lt;/p&gt;

&lt;p&gt;In this talk the maintainer of strace will describe these new features
and demonstrate what kinds of problems they help to solve.&lt;/p&gt;</description>
        <persons>
          <person id="3674">Dmitry Levin</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6496.php">Submit feedback</link>
        </links>
      </event>
      <event id="6133">
        <start>14:25</start>
        <duration>00:25</duration>
        <room>AW1.121</room>
        <slug>debugging_tools_ftrace</slug>
        <title>Debugging realtime application with Ftrace</title>
        <subtitle/>
        <track>Debugging tools</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Introducing Ftrace and using it for Linux realtime application&lt;/p&gt;</abstract>
        <description>&lt;p&gt;Ftrace (Function Tracer) is a very famous tracing/debugging tool. It is built directly into the Linux kernel and most of standard distributions already have
various configurations of Ftrace enabled in their most recent releases.&lt;/p&gt;

&lt;p&gt;One of the benefits that Ftrace brings to Linux is the ability to see what is happening inside the kernel with a large
number of 'tracers' (function or events) .&lt;/p&gt;

&lt;ul&gt;
&lt;li&gt;kernel function calling tree and timestamps&lt;/li&gt;
&lt;li&gt;kernel events (such as processus wakeup or switch)&lt;/li&gt;
&lt;/ul&gt;


&lt;p&gt;As such, this makes finding problem areas or simply tracking down that strange bug more manageable. Ftrace's ability to show the events that lead up to severe problem gives
a better chance of finding exactly what caused it and can help the developer  a lot. API to talk with Ftrace is located in a Debugfs file system. typically mounted at /sys/kernel/debug.
You can also use 'trace-cmd' utility for easier access.&lt;/p&gt;

&lt;p&gt;After a brief history and introduction about tracing tools (SystemTap, eBPF, LTT-ng, ...) we will (briefly) talk about Ftrace internals and describe main features :&lt;/p&gt;

&lt;ul&gt;
&lt;li&gt;installing it on embedded distribution such as Buildroot or Yocto (ARM platform)&lt;/li&gt;
&lt;li&gt;tracing kernel functions (function, function_graph)&lt;/li&gt;
&lt;li&gt;kernel messages (trace_printk)&lt;/li&gt;
&lt;li&gt;markers (trace_marker)&lt;/li&gt;
&lt;li&gt;events&lt;/li&gt;
&lt;/ul&gt;


&lt;p&gt;After describing a simple use-case for a kernel driver we will focus on  events and use trace-cmd on "realtime" application running on standard Linux then PREEMPT_RT (ARM).&lt;/p&gt;

&lt;p&gt;We will compare performances of a POSIX based periodic task using SCHED&lt;em&gt;FIFO or SCHED&lt;/em&gt;OTHER on both kernel and finally generate graphs with GNU-plot.&lt;/p&gt;</description>
        <persons>
          <person id="1663">Pierre Ficheux</person>
        </persons>
        <links>
          <link href="https://www.kernel.org/doc/Documentation/trace/ftrace.txt">https://www.kernel.org/doc/Documentation/trace/ftrace.txt</link>
          <link href="https://elinux.org/Ftrace">https://elinux.org/Ftrace</link>
          <link href="http://">http://</link>
          <link href="https://submission.fosdem.org/feedback/6133.php">Submit feedback</link>
        </links>
      </event>
      <event id="7122">
        <start>14:55</start>
        <duration>00:40</duration>
        <room>AW1.121</room>
        <slug>debugging_tools_dtrace</slug>
        <title>DTrace for Linux</title>
        <subtitle/>
        <track>Debugging tools</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;DTrace for Linux&lt;/p&gt;

&lt;p&gt;DTrace is a dynamic tracing tool that allows kernel and userspace tracing in
operating systems. It was first implemented for Sun's Solaris and later adopted
by other operating systems (Mac OS X, BSD). The Linux port is still ongoing.&lt;/p&gt;

&lt;p&gt;In this talk, I would like to introduce the D language and its features. After a
brief introduction the talk will focus on the architecture of the DTrace itself.
Last part of the talk will be focused on the current status of the project.&lt;/p&gt;

&lt;p&gt;DTrace is able to process data directly in kernel like eBPF. This allows us to
perform some actions at the time an event has occured rather than during post
processing of the records later in userspace. It allows also more precise selection
of events of interest.&lt;/p&gt;

&lt;p&gt;It is possible to use DTrace in many use cases:&lt;/p&gt;

&lt;pre&gt;&lt;code&gt;- A kernel hacker may precisely monitor the Linux kernel
- A system administrator might use DTrace as an underlying technology
  for observing system behavior.
- Participation in distributed tracing of complex scenarios
&lt;/code&gt;&lt;/pre&gt;

&lt;p&gt;I would like to show some real life examples how DTrace can be used to inspect
running system or as source for external telemetric system.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;There are many tracers in the Linux world today with different aproaches to achive
their goals. One way to group them depends on when the data processing happens.&lt;/p&gt;

&lt;p&gt;DTrace is a predecessor of eBPF. The difference is that eBPF alone is not easy to
handle from user perspective. For that purpose a BCC project has started that provides
compiler and runtime libraries based on llvm to allow end users write tracing tools
in high level languages (C/Python). DTrace is based on D language (DTrace own language)
and has its own compiler built-in. This does not require any high-level language skills
or extra tools to start using DTrace.&lt;/p&gt;</description>
        <persons>
          <person id="4386">Tomáš Jedlička</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/7122.php">Submit feedback</link>
        </links>
      </event>
      <event id="7045">
        <start>15:40</start>
        <duration>00:40</duration>
        <room>AW1.121</room>
        <slug>debugging_tools_kmemleak</slug>
        <title>Introduction to kmemleak</title>
        <subtitle/>
        <track>Debugging tools</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;kmemleak (Kernel Memory Leak Detector) is a debugging tool integrated to the Linux kernel which provide a way to detect possible memory leaks. This talk is an introduction to kmemleak usage.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;This talk is intended for an audience of developers familiar with kernel development.&lt;/p&gt;

&lt;p&gt;Possible topics:
- Enable kmemleak in the kernel configuration
- Using kmemleak
- Description of the sample modules
- Deeper look into real development cases&lt;/p&gt;</description>
        <persons>
          <person id="5232">Thierry Escande</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/7045.php">Submit feedback</link>
        </links>
      </event>
      <event id="7005">
        <start>16:30</start>
        <duration>00:40</duration>
        <room>AW1.121</room>
        <slug>debugging_tools_dwarf5</slug>
        <title>DWARF5 and GNU extensions</title>
        <subtitle>New ways to go from binary to source</subtitle>
        <track>Debugging tools</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;After several years a new DWARF debugging standard, DWARF5, has been released that incorporates various GNU extensions that allow to better express how to map various binary constructs created by optimizing compilers back to the original source code while reducing the size of the debugging information. This results in more expressive debuginfo, but also introduces more complexity that DWARF consumers need to deal with.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;We will go over the existing GNU Extensions to DWARF, how they were adopted by DWARF5, and describe how debug consumers can take advantage of them. To reduce space a lot of different strategies are being used. Separate .debug files, .gnu_debuglink, build-ids, compressed ELF sections, debug types in ELF COMDAT sections, the Dwarf Compressor DWZ .multi files, DWARF Supplementary Object Files, GNU Debug Fission, split-dwarf .dwo files, DWARF Package Files .dwp files. The basic structure of describing a program with a tree of Debug Information Entries (DIEs) with attributes per compile unit augmented with some auxiliary data structures to map to source files, describe macros used in the source and get call frame information hasn't fundementally changed between DWARF version 2 and version 5. But the hierarchy of the representation and where the bits are stored has become much more complex. It is no longer possible to just see the DWARF descriptions as a fancy symbol table which can be simply indexed through some offsets. It has also become much more expressive than that.&lt;/p&gt;</description>
        <persons>
          <person id="160">Mark Wielaard</person>
        </persons>
        <links>
          <link href="https://sourceware.org/elfutils/DwarfExtensions">DWARF GNU Extensions</link>
          <link href="http://dwarfstd.org/">DWARF Debugging Standard </link>
          <link href="https://submission.fosdem.org/feedback/7005.php">Submit feedback</link>
        </links>
      </event>
      <event id="7116">
        <start>17:15</start>
        <duration>00:40</duration>
        <room>AW1.121</room>
        <slug>debugging_tools_rust</slug>
        <title>Rust versus DWARF versus LLVM</title>
        <subtitle/>
        <track>Debugging tools</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Rust presents new challenges for the debugging ecosystem.  This talk will cover some debugging peculiarities of Rust and how we plan to solve them.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;Rust is a new systems programming language from Mozilla.  Debugging Rust requires new capabilities from LLVM, from debuggers, and even DWARF.  This talk will cover some of the difficulties presented by Rust, and will describe ongoing work to fix these problems in DWARF, LLVM, lldb, and gdb.&lt;/p&gt;</description>
        <persons>
          <person id="1585">Tom Tromey</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/7116.php">Submit feedback</link>
        </links>
      </event>
      <event id="6810">
        <start>18:00</start>
        <duration>00:40</duration>
        <room>AW1.121</room>
        <slug>debugging_tools_infinity</slug>
        <title>Infinity</title>
        <subtitle/>
        <track>Debugging tools</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Infinity is a platform-independent system for executables and shared libraries to expose functionality to debug, monitoring, and analysis tooling.  It grew from a need to be able to debug
multithreaded applications without requiring libthread&lt;em&gt;db.  Other systems exist that use the libthread&lt;/em&gt;db paradigm, for example librtld_db and OPMD; Infinity was designed to replace this entire
class of library-tool interface with something more portable and robust.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;Covers:
* What is Infinity?
* Motivation for creating it
* Status of tooling and glibc/GDB integration
* Mini code walk through (libthread_db vs Infinity)
* Demonstrations!
* Potential future uses&lt;/p&gt;</description>
        <persons>
          <person id="5132">Gary Benson</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6810.php">Submit feedback</link>
        </links>
      </event>
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
      <event id="6919">
        <start>10:30</start>
        <duration>00:25</duration>
        <room>K.4.201</room>
        <slug>cad_spice</slug>
        <title>FOSS/H EDA tools for SPICE modeling</title>
        <subtitle/>
        <track>CAD and Open Hardware</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;EspoTek’s Labrador is a tiny yet powerful device that transforms a PC  into a fully featured electronics lab, complete with an oscilloscope, signal generator, logic analyzer, multimeter and power supply. Qucs (Quite Universal Circuit Simulator) is an integrated circuit (IC) simulator which allow to setup a circuit with a schematic entry graphical user interface (GUI) and simulate the large and small-signal (DC, AC, S-parameter, Harmonic Balance and noise analysis) of the microelectronic circuit. Both hardware and software are 100% open-source (FOSS). Both tools will be used to illustrate complete flow of the measurements, characterization and SPICE modeling of the semiconductor devices for EDA IC design applications. EspoTek’s Labrador and Qucs cointegrations thru embedded Octave scripts will be discussed as well.&lt;/p&gt;</abstract>
        <description></description>
        <persons>
          <person id="2648">Wladek Grabinski</person>
        </persons>
        <links>
          <link href="hhttps://www.crowdsupply.com/espotek/labrador">EspoTek’s Labrador</link>
          <link href="http://qucs.sourceforge.net/">Qucs</link>
          <link href="https://submission.fosdem.org/feedback/6919.php">Submit feedback</link>
        </links>
      </event>
      <event id="7102">
        <start>11:00</start>
        <duration>00:25</duration>
        <room>K.4.201</room>
        <slug>cad_gnucap</slug>
        <title>Gnucap</title>
        <subtitle/>
        <track>CAD and Open Hardware</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;This is an overview of Gnucap, with emphasis on recent developments and work in progress.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;This is an overview of Gnucap, with emphasis on recent developments and work in progress.&lt;/p&gt;</description>
        <persons>
          <person id="3724">Al Davis</person>
        </persons>
        <links>
          <link href="http://gnucap.org">Gnucap wiki</link>
          <link href="https://submission.fosdem.org/feedback/7102.php">Submit feedback</link>
        </links>
      </event>
      <event id="6494">
        <start>11:30</start>
        <duration>00:25</duration>
        <room>K.4.201</room>
        <slug>cad_fpga_intro</slug>
        <title>Tutorial: my first FPGA design</title>
        <subtitle>Basic course to create a simple FPGA design using OSS tools</subtitle>
        <track>CAD and Open Hardware</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;You have no hardware knowledge and want to know how people design chips ? You are a software guy, having heard of VHDL or Verilog but never used it ? In this 25 min tutorial, you will learn the basis of hardware design and how to write a simple FPGA design using only FOSS tools. (This tutorial is not about PCB design, but reprogrammable chips design)&lt;/p&gt;

&lt;p&gt;This is the same talk as the one of FOSDEM'17.  As the room was full, some people were not able to attend so I propose to do it again.&lt;/p&gt;</abstract>
        <description></description>
        <persons>
          <person id="2379">Tristan Gingold</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6494.php">Submit feedback</link>
        </links>
      </event>
      <event id="6983">
        <start>12:00</start>
        <duration>00:25</duration>
        <room>K.4.201</room>
        <slug>cad_fpga_gui</slug>
        <title>Graphic design tools for Open Source FPGAs</title>
        <subtitle>Learn about the Apio and Icestudio projects</subtitle>
        <track>CAD and Open Hardware</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Nowadays we have low-level tools to control Open Source FPGAs but these are only for experts who know hardware description languages. There is a challenge in making this technology accessible and easy to use by everyone.
In this talk I will present the project Apio, a multiplatform cli toolbox, and Icestudio, a high-level visual editor that allows to create and synthesize graphic designs into Open Source FPGAs.
Connecting high-level description languages with real hardware implementations enables a lot of new ideas, new research branches, new capabilities. We have begun to explore the surface but there is still a long way to go!&lt;/p&gt;</abstract>
        <description></description>
        <persons>
          <person id="5201">Jesús Arroyo Torrens</person>
        </persons>
        <links>
          <link href="https://github.com/FPGAwars/icestudio">Icestudio</link>
          <link href="https://github.com/FPGAwars/apio">Apio</link>
          <link href="http://fpgawars.github.io/">FPGAwars</link>
          <link href="https://submission.fosdem.org/feedback/6983.php">Submit feedback</link>
        </links>
      </event>
      <event id="6913">
        <start>12:30</start>
        <duration>00:25</duration>
        <room>K.4.201</room>
        <slug>cad_os_fpga</slug>
        <title>Funny digital electronics with Open Source FPGAs</title>
        <subtitle/>
        <track>CAD and Open Hardware</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Is it possible for non-tech people or even kids to create digital circuits? Thanks to the &lt;a href="http://www.clifford.at/icestorm/"&gt;Icestorm project&lt;/a&gt; we all have open source FPGAs. We have develop both Free/libre hardware and software for making it very easy for the non-tech people or kids to start learning and playing with digital circuits. We will show in a demo how the &lt;a href="https://github.com/FPGAwars/icestudio"&gt;Icestudio&lt;/a&gt; and the &lt;a href="https://github.com/FPGAwars/icezum/wiki"&gt;Icezum Alhambra&lt;/a&gt; FPGA board works. With very few clicks the digital circuits are synthesized and uploaded into the FPGA. It opens the way for teaching hardware thinking and digital circuits without pain and learning concepts while building circuits&lt;/p&gt;</abstract>
        <description></description>
        <persons>
          <person id="5179">Obijuan</person>
        </persons>
        <links>
          <link href="http://www.clifford.at/icestorm/">ICEstorm project</link>
          <link href="https://github.com/FPGAwars/icezum/wiki">Icezum Alhambra FPGA board</link>
          <link href="https://github.com/FPGAwars/icestudio/wiki">Icestudio: Experimental graphic editor for open FPGAs. Built on top of the Icestorm project.</link>
          <link href="https://submission.fosdem.org/feedback/6913.php">Submit feedback</link>
        </links>
      </event>
      <event id="6521">
        <start>13:00</start>
        <duration>00:25</duration>
        <room>K.4.201</room>
        <slug>cad_os_asic</slug>
        <title>The open source EDA tool chain for the Chips4Makers project</title>
        <subtitle>Is an ASIC made with fully open source tool chain possible ? Is it affordable ?</subtitle>
        <track>CAD and Open Hardware</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;The Chips4Makers project tries to make low volume ASICs possible for makers and hobbyists. The talk will start with a summary and vision of the Chips4Makers project.&lt;/p&gt;

&lt;p&gt;In a second part of the talk the current state of the used tool chain will be discussed. With the Retro-uC project this tool chain is tested and it will be presented what worked and what is candidate for improvement. I do hope I can get feedback from the public and get more inspiration to improve the toolchain in use for future user projects.&lt;/p&gt;

&lt;p&gt;The Retro-uC chip itself - a microcontroller with the right instruction set for a retrocomputing enthusiast - is discussed in a talk during in the retrocomputing devroom.&lt;/p&gt;</abstract>
        <description></description>
        <persons>
          <person id="4996">Staf Verhaegen</person>
        </persons>
        <links>
          <link href="https://chips4makers.io/blog">The Chips4Makers blog</link>
          <link href="https://hackaday.io/project/27091-chips4makers-pilot-retro-uc">Hackaday Retro-uC project page</link>
          <link href="https://submission.fosdem.org/feedback/6521.php">Submit feedback</link>
        </links>
      </event>
      <event id="6985">
        <start>13:30</start>
        <duration>00:25</duration>
        <room>K.4.201</room>
        <slug>cad_3d_asic</slug>
        <title>Automated system partitioning based on hypergraphs for 3D stacked integrated circuits</title>
        <subtitle/>
        <track>CAD and Open Hardware</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;With the evolution of integrated circuits (ICs), 3D integration is becoming a short and middle term viable solution to increase the system performance, functional density per unit area and reduce system power, as an alternative to costly sub 7nm CMOS technologies. However, as trendy as it may turn, there is no viable Electronic Design Automation (EDA) toolchain that allows to design ICs in 3D. Our work aims at developing tools that could be used in standard 2D EDA chains to deal with 3D ICs. Such tools will automatically transform any 2D design into an optimized 3D architecture by extracting a graph from the DEF file coming out from 2D synthesis and place&amp;amp;route flow. Afterward, this graph can be partitioned automatically using state-of-the art graph partitioning tools.&lt;/p&gt;

&lt;p&gt;In order to create the toolchain, we developed a custom DEF parser to answer specific and limited needs that existing solutions such as Verilog-perl or PyVerilog did not allow. The software scans the DEF to find all the gates, pins and nets in the given design. When analyzing nets, it also parses the routing information to determine the total length of the net, which will be needed in the partitioning phase.&lt;/p&gt;

&lt;p&gt;In parallel with the DEF parsing (desgin input), the LEF technology file (technology input) is also parsed to fetch the characteristics of the gates that will be used later on in the clustering and partitioning steps.&lt;/p&gt;

&lt;p&gt;Once the design has been parsed, it can be clusterized to reduce the problem complexity and the output is formatted to extract the underlying hypergraph.
The extraction makes use of standard Python structures such as dictionaries in order to quickly find links in the design and establish references between the vertices (i.e. clusters or gates) and edges (i.e. nets). When building the hypergraph, some metadata are linked to each vertex/edge (e.g. area, power, total length, total connections) to later set their weights that will be needed in the partitioning phase.&lt;/p&gt;

&lt;p&gt;As soon as the design has been converted into a hypergraph, it is formatted in such a way so that it can be fed to the hMETIS package. Using the weights sets extracted during DEF/LEF parsing phase, hMETIS partitions the graph. The output is processed into  TCL directives that are then interpreted by a proprietary tool handling the 3D P&amp;amp;R, or they can be used to automatically partition the post-synthesis gate-level netlist and thus be used with any EDA flow, including the open-source ones.&lt;/p&gt;

&lt;p&gt;&lt;em&gt;Quentin Delhaye, Dragomir Milojevic, Université libre de Bruxelles, Brussels, Belgium&lt;/em&gt;&lt;/p&gt;</abstract>
        <description></description>
        <persons>
          <person id="5186">Quentin Delhaye</person>
        </persons>
        <links>
          <link href="http://glaros.dtc.umn.edu/gkhome/metis/hmetis/overview">hMETIS package developed by Karypis Lab</link>
          <link href="https://github.com/parastuffs/metis_unicorn/blob/master/script/phoney.py">Hypergraph extraction</link>
          <link href="https://github.com/parastuffs/def_parser">DEF parser</link>
          <link href="https://submission.fosdem.org/feedback/6985.php">Submit feedback</link>
        </links>
      </event>
      <event id="6343">
        <start>14:00</start>
        <duration>00:25</duration>
        <room>K.4.201</room>
        <slug>cad_kicad_v5</slug>
        <title>KiCad Version 5 New Feature Demo</title>
        <subtitle/>
        <track>CAD and Open Hardware</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;A demonstration of the new features in version 5 of KiCad, along with a quick state of the union, by KiCad's project leader.&lt;/p&gt;</abstract>
        <description></description>
        <persons>
          <person id="2508">Wayne Stambaugh</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6343.php">Submit feedback</link>
        </links>
      </event>
      <event id="6754">
        <start>14:30</start>
        <duration>00:25</duration>
        <room>K.4.201</room>
        <slug>cad_pcb_code</slug>
        <title>Designing PCBs with code</title>
        <subtitle>Is designing circuits with code instead of CAD the future of electronic design automation?</subtitle>
        <track>CAD and Open Hardware</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;An overview and history of various tools and languages that allow you to use code rather than CAD software to design circuits.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;For anyone used to expressing their ideas with code using a CAD tool to design electronics can be an even more frustrating exercise than normal. If you are a programmer thinking about getting into designing circuits or if you have ever thought "I could easily solve this with a for-loop" when using KiCad then this talk is for you.&lt;/p&gt;

&lt;p&gt;We will cover the history of ideas of using code to describe electronic circuits and culminate in the presenter's own work in advancing the state of the art through formal grammars, structured editors, code synthesis and combining programmatic and graphical manipulation in user interfaces.&lt;/p&gt;</description>
        <persons>
          <person id="2377">Kaspar Emanuel</person>
        </persons>
        <links>
          <link href="https://sourceforge.net/projects/phdl/">Printed Circuit Board Hardware Description Language</link>
          <link href="https://github.com/xesscorp/skidl">SKiDL allows you to compactly describe the interconnection of electronic circuits and components using Python.</link>
          <link href="https://monostable.github.io/electro-grammar/">A lightning fast parser of electronic component descriptions</link>
          <link href="https://submission.fosdem.org/feedback/6754.php">Submit feedback</link>
        </links>
      </event>
      <event id="6315">
        <start>15:00</start>
        <duration>00:25</duration>
        <room>K.4.201</room>
        <slug>cad_horizon</slug>
        <title>horizon - a new star on the EDA sky</title>
        <subtitle/>
        <track>CAD and Open Hardware</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Horizon is a from-scratch EDA package with focus on useful parts management and rule-driven design.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;This talk covers my motivation for starting a new EDA package in 2016 and the main ideas behind horizon as well as some important implementation details.&lt;/p&gt;</description>
        <persons>
          <person id="4800">Lukas K.</person>
        </persons>
        <links>
          <link href="https://github.com/carrotIndustries/horizon">horizon on github</link>
          <link href="https://submission.fosdem.org/feedback/6315.php">Submit feedback</link>
        </links>
      </event>
      <event id="6898">
        <start>15:30</start>
        <duration>00:25</duration>
        <room>K.4.201</room>
        <slug>cad_librepcb</slug>
        <title>LibrePCB</title>
        <subtitle>Introducing a new, powerful and intuitive EDA tool</subtitle>
        <track>CAD and Open Hardware</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;This talk will give you a short introduction to LibrePCB, a new software for designing printed circuit boards. The goal of the LibrePCB project is to create a modern, powerful and easy-to-use EDA package for everyone. The project is still in a quite early development stage, but is already usable for creating simple PCBs.&lt;/p&gt;

&lt;p&gt;In addition to a short live demonstration, I'd like to talk about the motivation behind LibrePCB, explain some of its concepts and what plans we have for the future.&lt;/p&gt;</abstract>
        <description></description>
        <persons>
          <person id="5141">Urban Bruhin</person>
        </persons>
        <links>
          <link href="http://librepcb.org/">Website</link>
          <link href="https://github.com/LibrePCB/LibrePCB">GitHub repository</link>
          <link href="https://submission.fosdem.org/feedback/6898.php">Submit feedback</link>
        </links>
      </event>
      <event id="7085">
        <start>16:00</start>
        <duration>00:25</duration>
        <room>K.4.201</room>
        <slug>cad_dr_format</slug>
        <title>Proposal for an open and democratic Design Rule format</title>
        <subtitle>A missing piece in the open source EDA world</subtitle>
        <track>CAD and Open Hardware</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;In the topic of Electronic-Design-Automation (EDA) Design Rules are used to validate a drawing against constraints usually set by the manufacturer. In this talk I'd like to introduce a (file-)format proposal for such Design Rules focused on the usage in PCB design.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;In the past the definition of Design Rules has been a mess. Most EDA software provider (e.g. Autodesk, Altium, Cadence) have their own set of Design Rules which neither match the expectations of the users nor the requirements from the PCB manufacturers. Beside that the Design Rules are often misleading as they do not allow to describe what really breaks production or not. Because of that most PCB manufacturers give too loose rules which often break production for the customers.
An open and democratic format for Design Rules could solve this. We face the issue that at least three parties are involved in these rules which I believe can only be solved by an open source format. Because of this I talked to EDA software supplieres, PCB manufactures and users and asked what they are missing and expect from it.
Using this feedback I'd like to introduce our proposal and ask if and if yes, how work should be further organized. Depending on the projects schedule an practical implementation in Gerbv could be presented.&lt;/p&gt;</description>
        <persons>
          <person id="4004">Patrick Franken</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/7085.php">Submit feedback</link>
        </links>
      </event>
      <event id="6937">
        <start>16:30</start>
        <duration>00:25</duration>
        <room>K.4.201</room>
        <slug>oshw_laptop</slug>
        <title>Developing an Open Source Hardware Laptop with KiCAD</title>
        <subtitle>Using FOSS tools for designing an OSHW laptop</subtitle>
        <track>CAD and Open Hardware</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;A presentation on the design of the TERES Do-It_Yourself laptop, fully designed with KiCad.&lt;/p&gt;</abstract>
        <description></description>
        <persons>
          <person id="1641">Tsvetan Usunov</person>
        </persons>
        <links>
          <link href="https://www.olimex.com/Products/DIY-Laptop/">https://www.olimex.com/Products/DIY-Laptop/</link>
          <link href="https://github.com/OLIMEX/DIY-LAPTOP">https://github.com/OLIMEX/DIY-LAPTOP</link>
          <link href="https://submission.fosdem.org/feedback/6937.php">Submit feedback</link>
        </links>
      </event>
      <event id="7026">
        <start>17:00</start>
        <duration>00:25</duration>
        <room>K.4.201</room>
        <slug>oshw_pcb_proto</slug>
        <title>Desktop PCB Rapid Prototyping</title>
        <subtitle>Print circuit board traces and paste on your own desktop</subtitle>
        <track>CAD and Open Hardware</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;We examine the unique approach of rapid prototyping using silver nanoparticle trace printing on FR4 substrate. Demonstration of a desktop PCB printer involves trace printing and then solder paste application using the same nozzle. A plate baking process finishes the PCBs.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;Several trends have gripped the maker and industrial community, allowing for small batch production and rapid prototyping in consumer (like at home) environments. While pastic 3D printers have gained popularity, relatively little has developed in PCB production.&lt;/p&gt;

&lt;p&gt;We'll put a Voltera One printer in operation to study its features and see how it helps a designer produce a finished PCB from (in brain) concept to powered and working circuits in one or two hours. The demonstration portion will cut some corners, due to an otherwise hour long ink curing process.&lt;/p&gt;

&lt;p&gt;Just like 3D printers, the device we'll examine requires some upkeep and learning curve. In order to efficiently flatten this curve, we'll propose some tips and workarounds to consider.&lt;/p&gt;

&lt;p&gt;Participants are welcome to provide a one sided Gerber file, and we'll print your design! Please keep fine pitch and complex circuitry to a minimum, for this half hour demonstration.&lt;/p&gt;</description>
        <persons>
          <person id="2380">Michael Schloh von Bennewitz</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/7026.php">Submit feedback</link>
        </links>
      </event>
      <event id="6609">
        <start>17:30</start>
        <duration>00:15</duration>
        <room>K.4.201</room>
        <slug>oshw_shenzen</slug>
        <title>Component Sourcing for Design and Manufacturing in Shenzhen</title>
        <subtitle>An augmentation of Bunnie Huang's "Guide to Shenzhen": what you should know and how you should have designed the PCB and selected the components.... BEFORE making the trip to Shenzhen</subtitle>
        <track>CAD and Open Hardware</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Bunnie Huang's "Guide to Shenzhen" is absolutely invaluable, but it assumes that you know exactly what you need to get, before you actually get it.  If this isn't clear, for an example of exactly what the problem is, try an Internet search for "Laptop trackpad supplier".  Did you find one? Did you find a source of trackpads for use in that laptop that you're thinking of designing?  Or did your search queries instead get completely and utterly swamped with thousands upon thousands of aliexpress pictures of the EXACT SAME Apple Trackpad for a 13in Macbook Pro?&lt;/p&gt;

&lt;p&gt;What about LCDs?  Do you even know what type of LCD is commonly available right now?  Were you aware that MIPI is Cartelled? Or that the people telling you that eDP is "The Future" are trying to push a much higher-power-consumption design at you and they forgot to invite China-based Manufacturers to the closed-door meeting.  How can you &lt;em&gt;actually&lt;/em&gt; find which LCDs are commonly manufactured and available in Shenzhen, so that you can begin the design right now before you take that expensive trip abroad.&lt;/p&gt;

&lt;p&gt;And what about components?  If you've looked on taobao or aliexpress, you'll know that many of them are rip-offs, there's absolutely no datasheets, the vendors make pittance so they're extremely unlikely to answer your questions... so what &lt;em&gt;actual&lt;/em&gt; use is this resource, to anyone?&lt;/p&gt;

&lt;p&gt;This talk will help answer the paradox of bridging the gap between Shenzhen market prices and the Western and Libre mindsets for hardware design, allowing attendees to take proper advantage of the lower pricing of Shenzhen-sourced parts, and to avoid the nightmare scenario of designing a PCB only to find that its parts went End-of-Life in the Shenzhen markets many years ago, and that the last remaining parts available must be bought from Digikey and IMPORTED (back into China from where they originated!) with a whopping lead time and huge import tariffs of up to 40 percent.&lt;/p&gt;</abstract>
        <description></description>
        <persons>
          <person id="3743">Luke Kenneth Casson Leighton</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6609.php">Submit feedback</link>
        </links>
      </event>
      <event id="5987">
        <start>17:50</start>
        <duration>00:25</duration>
        <room>K.4.201</room>
        <slug>oshw_openseamap</slug>
        <title>An Open Platform for Collecting data for OpenSeaMap</title>
        <subtitle>The Proposed Platform Comprises Open Soft- &amp; Hardware </subtitle>
        <track>CAD and Open Hardware</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;The OpenSeaMap project is part of the OpenStreetMap project family and aims at leveraging crowd sourced information for leisure captains. As it targets a sepcific user and application group it also relies on additional data on top of traditionally used positional data. This presentation is about an effort to create a hard- and software platform capable of collecting the needed data for the OpenSeaMap project. We share early results yield with a prototype implementation of the proposed platform.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;This presentation focusses on the hardware part of a platform prototype used for collecting data on a ship of a participant of the crowd sourced OpenSeaMap project. In combination with the software running on the proposed hardware platform and additional software parts running on the host of an participant and the server side software of the OpenSeaMap project the data is collected, processed, rendered and provided for  download and use by the leisure boat captains. The platform is based on a RaspBerry PI and a HAT as well as a professional depth ranger. The project aims at developing a dedicated HAT for the purpose of OpenSeaMap data collection.&lt;/p&gt;

&lt;p&gt;However, the current state of development, namely a productively used prototype and the plans for the next steps as well as some early results are shared with the audience. Further ideas and recommendations for improvements and next steps are very welcome.&lt;/p&gt;</description>
        <persons>
          <person id="4234">Ulrich Langenbach</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/5987.php">Submit feedback</link>
        </links>
      </event>
      <event id="6839">
        <start>18:20</start>
        <duration>00:40</duration>
        <room>K.4.201</room>
        <slug>oshw_wikilab</slug>
        <title>Wikilab, architecture &amp; CNC</title>
        <subtitle>Collaborative architecture and construction with FreeCAD</subtitle>
        <track>CAD and Open Hardware</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;This talk will showcase how FOSS design tools such as FreeCAD were used during the WikiLab project in São Paulo, Brazil, and how this can change the game in the construction field.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;The &lt;a href="https://wikilab.blog.br/"&gt;WikiLab&lt;/a&gt; is a collaborative construction based on the &lt;a href="https://wikihouse.cc/"&gt;WikiHouse&lt;/a&gt; project, that started in São Paulo, Brazil, in 2017 and is still occurring, being a continuous experience. The construction was done mostly by a team of volunteers, it mixes architecture, CNC manufacturing, collaborative planning, construction and management, ecological, technological and social research, and the whole design was done completely with free software, mostly &lt;a href="http://www.freecadweb.org"&gt;FreeCAD&lt;/a&gt;. In this talk, I'll try to showcase how the use of free software had a very special impact on the project design and construction, how this reaches areas where no commercial software entered before, and how this can change the way we do architecture.&lt;/p&gt;</description>
        <persons>
          <person id="2906">Yorik van Havre</person>
        </persons>
        <links>
          <link href="https://wikilab.blog.br/">the WikiLab project</link>
          <link href="http://www.freecadweb.org">FreeCAD</link>
          <link href="https://submission.fosdem.org/feedback/6839.php">Submit feedback</link>
        </links>
      </event>
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
      <event id="6859">
        <start>10:30</start>
        <duration>00:40</duration>
        <room>UD2.119</room>
        <slug>opensource_idm_in_enterprise</slug>
        <title> Open Source Identity Management in the Enterprise </title>
        <subtitle/>
        <track>Identity and Access Management</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;This talk will discuss how Red Hat IT utilizes and integrates open source solutions to offer a seamless experience for internal users. Specifically, we will cover how Red Hat incorporates SAML, Kerberos, LDAP, Two-Factor Authentication, PKI certificates, and how end-user systems are able to function in this multi-platform, fluid BYOD environment. Recent experiences will be shared on how Red Hat is scaling this identity management platform to utilize true single sign-on in cloud environments. Finally, best practices and future plans will be discussed as part of a Q&amp;amp;A session.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;Enterprises frequently struggle with building an integrated identity management solution that is responsible for identities across all applications and services.  Cloud-based and hosted applications are now increasingly consumed, requiring organizations to rethink perimeter authentication and centralized account management.  IT departments must now offer secure identity services and the applications that consume them without the comfort of a closed network or managed user devices.&lt;/p&gt;

&lt;p&gt;Like most enterprises, Red Hat utilizes a large identity management framework to manage user identities across the enterprise.  However, unlike the traditional enterprise, Red Hat's identity management solution uses 100% open source technologies to provide secure access to internal and cloud-based services.  Using projects such as FreeIPA, KeyCloak, 389 Directory Server and Dogtag Certificate System, Red Hat IT is able to offer a standards-based identity management solution without the need for proprietary products. This talk will cover where these technologies are used and how they are integrated across the environment.&lt;/p&gt;</description>
        <persons>
          <person id="5263">Dustin Minnich</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6859.php">Submit feedback</link>
        </links>
      </event>
      <event id="6111">
        <start>11:15</start>
        <duration>00:30</duration>
        <room>UD2.119</room>
        <slug>idm_aedir</slug>
        <title>Æ-DIR -- Authorized Entities Directory</title>
        <subtitle>from paranoid user management to secure system management</subtitle>
        <track>Identity and Access Management</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;This talk will introduce Æ-DIR, a paranoid identity and access management (IAM) system based on pure OpenLDAP. The talk will detail the data model used for delegated administration and its use e.g. for a strictly authorizing SSH proxy.&lt;/p&gt;

&lt;p&gt;Furthermore it introduces OATH-LDAP, a OATH-based OTP authentication system with pure LDAP backend and the enrollment process used for secure initializing yubikey tokens.&lt;/p&gt;

&lt;p&gt;The conclusion of the talk will highlight want else will be done with the data and role model in the near future.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;Æ-DIR and OATH-LDAP are free software projects.&lt;/p&gt;

&lt;p&gt;This talk will present a concept and real-world implementation of a privileged identity and access management system (IAM, PAM) purely based on OpenLDAP. The main goal of Æ-DIR (besides challenging Unicode handling in various software with its name) is to follow the delegation, need-to-know and least-privilege principles as strict as possible. The visibility of user, group, sudoers, etc. is limited by OpenLDAP’s set-based ACLs. All systems and services, no exception(!), have to individually authenticate to be authorized to access Æ-DIR.&lt;/p&gt;

&lt;p&gt;The talk will give some additional information about the secured base configuration of OpenLDAP, tools developed and some experiences made when migrating/attaching 7000+ servers to this user management.&lt;/p&gt;

&lt;p&gt;Furthermore the architecture of a SSH gateway is shown which uses the very same access control data to authorize SSH connections passing through the gateway.&lt;/p&gt;

&lt;p&gt;Finally the talk will outline some additional to-dos, and rough ideas how to further develop this system.&lt;/p&gt;

&lt;p&gt;OATH-LDAP defines a schema, a functional model and a LDAP-based enrollment for OATH-based authentication tokens. It is designed to be used with any LDAP server, but especially is ready-to-use integrated with Æ-DIR. It is actually used combined with a highly secure enrollment process (no QR code displayed!) for two-factor HOTP authentication with yubikey tokens.&lt;/p&gt;</description>
        <persons>
          <person id="3903">Michael Ströder</person>
        </persons>
        <links>
          <link href="https://www.ae-dir.com/">Æ-DIR -- Authorized Entities Directory</link>
          <link href="https://oath-ldap.stroeder.com/">OATH-LDAP -- OATH-based authc with LDAP backend</link>
          <link href="https://submission.fosdem.org/feedback/6111.php">Submit feedback</link>
        </links>
      </event>
      <event id="6685">
        <start>11:50</start>
        <duration>00:30</duration>
        <room>UD2.119</room>
        <slug>ansible_freeipa</slug>
        <title>freeIPA installation using Ansible</title>
        <subtitle>Description and examples of freeIPA client and server installations using ansible-freeipa.</subtitle>
        <track>Identity and Access Management</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;The talk will describe freeIPA client and server installations using anisble-freeipa with examples.&lt;/p&gt;

&lt;p&gt;The client installation and configuration using ansible-freeipa provides some simplifications and extensions of the normal installation process like for example the possibility to install several clients, a simple use of one time passwords, enhanced server discovery and also the repair mode.&lt;/p&gt;

&lt;p&gt;The server installation and configruation part is currently work in progress, but should be complete for the talk.&lt;/p&gt;</abstract>
        <description></description>
        <persons>
          <person id="5082">Thomas Woerner</person>
        </persons>
        <links>
          <link href="https://github.com/freeipa/ansible-freeipa">ansible-freeipa github repo</link>
          <link href="https://submission.fosdem.org/feedback/6685.php">Submit feedback</link>
        </links>
      </event>
      <event id="6809">
        <start>12:25</start>
        <duration>00:30</duration>
        <room>UD2.119</room>
        <slug>keycloak</slug>
        <title>Easily Secure Your Front and Back End app with Keycloak</title>
        <subtitle/>
        <track>Identity and Access Management</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;A presentation of the Open Source IDM server : Keycloak. Some slides to give the big picture followed by a live coding session where we will set up a keycloak server and then secure a front app and some backend ends applications.&lt;/p&gt;</abstract>
        <description></description>
        <persons>
          <person id="5136">Sébastien Blanc</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6809.php">Submit feedback</link>
        </links>
      </event>
      <event id="6089">
        <start>13:00</start>
        <duration>00:30</duration>
        <room>UD2.119</room>
        <slug>idm_midpoint</slug>
        <title>Identity governance and data protection with midPoint</title>
        <subtitle/>
        <track>Identity and Access Management</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;This talk will present new data protection and identity governance capabilities of midPoint. MidPoint is open source identity management (IDM) and identity governance (IGA) system. MidPoint has all the features of a traditional identity management system. However, this talk will focus on data protection and identity governance. We will explain what identity governance is and how it can handle the challenges of data protection legislation such as European GDPR regulation. We will show how to use midPoint to set up identity management and governance policies and how midPoint can be used to maintain them in the long run. The talk will show how to manage data protection, entitlements and security policies in one unified system and how to consistently apply that to employees, students, contractors ... and all other identities in all your systems.
This talk is intended for identity administrators, security officers and all security practitioners in general.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;Overall goal: Overview of midPoint as an open source identity management and governance system. Especially focused on the governance part, as that is very unique in the open source world. Demonstration how midPoint can be used for data protection (e.g. GDPR).&lt;/p&gt;

&lt;ul&gt;
&lt;li&gt;Very quick overview of midPoint - what it is, a bit of history, etc.&lt;/li&gt;
&lt;li&gt;Basic demonstration of RBAC, role request process, approval and so on. Just few minutes to warm up the audience and get everybody at the same level of understanding of the IDM basics.&lt;/li&gt;
&lt;li&gt;Identity governance: Explanation of how midPoint policy rules and data protection scopes work. How they can be used to set up data protection policies (such as GDPR lawful basis management). Little bit of theory. But mostly practical.&lt;/li&gt;
&lt;li&gt;Short demonstration of the policy set up in midPoint. E.g. show how midPoint can report the problems with GDPR compliance.&lt;/li&gt;
&lt;/ul&gt;


&lt;p&gt;MidPoint is a comprehensive open source IDM system. Project is running since 2011 and it is very active:
https://github.com/Evolveum/midpoint
Katarina Valalikova and Radovan Semancik are both core developers of midPoint.&lt;/p&gt;

&lt;p&gt;Expected duration: 40+10min&lt;/p&gt;</description>
        <persons>
          <person id="3191">Radovan Semancik</person>
        </persons>
        <links>
          <link href="http://midpoint.evolveum.com/">midPoint home</link>
          <link href="https://github.com/Evolveum/midpoint">midPoint GitHub page</link>
          <link href="https://evolveum.com/">Evolveum</link>
          <link href="https://submission.fosdem.org/feedback/6089.php">Submit feedback</link>
        </links>
      </event>
      <event id="6705">
        <start>13:35</start>
        <duration>00:30</duration>
        <room>UD2.119</room>
        <slug>hashicorp_vault</slug>
        <title>Implementing a safe and auditable access to customer instances of your SaaS for the support staff with HashiCorp Vault</title>
        <subtitle/>
        <track>Identity and Access Management</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;SaaS are for a lot of us an unavoidable part of our day to day workflows. Unfortunately, sometimes things goes wrong and you need an hand from the support team to get you back on track.&lt;/p&gt;

&lt;p&gt;This talk will explore how, as a SaaS provider, you can implement an access to independent customer instances for your support staff and guarantee accountability and auditability using only free software tools like HashiCorp Vault.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;A rough outline of the talk would be:
 * Challenges of doing support as a SaaS provider in terms of access management
 * Evaluation of solutions and their shortcoming
 * Introduction to the secret manager tool HashiCorp Vault
 * Implementation of a solution that guarantee accountability and auditability. There will be a bit of PKI and Golang.
 * Live demo using the (myTuleap)[https://www.tuleap.org/solutions/mytuleap] cloud service as an example&lt;/p&gt;</description>
        <persons>
          <person id="5090">Thomas Gerbet</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6705.php">Submit feedback</link>
        </links>
      </event>
      <event id="6847">
        <start>14:10</start>
        <duration>00:40</duration>
        <room>UD2.119</room>
        <slug>samba_ad_it_works</slug>
        <title>SaMBa-AD, it works</title>
        <subtitle>stories of battles fought and won</subtitle>
        <track>Identity and Access Management</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Samba Active Directory is now battle ready for enterprise identity and access management.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;We want to share with your some stories of how Samba Active Directory is used daily on large setups with many hundreds or thousands of users and PCs.&lt;/p&gt;

&lt;p&gt;You'll discover that the thing is used in Ministries, large universities, research center, state governments ... even central banks !!&lt;/p&gt;

&lt;p&gt;Our aim is to inspire you to take Samba-AD back home with you and make it an ingredient of your own success as enterprise identity managers.&lt;/p&gt;</description>
        <persons>
          <person id="2398">Vincent Cardon</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6847.php">Submit feedback</link>
        </links>
      </event>
      <event id="6617">
        <start>14:55</start>
        <duration>00:30</duration>
        <room>UD2.119</room>
        <slug>samba_ad_in_fedora</slug>
        <title>Samba AD in Fedora</title>
        <subtitle>The long road to AD</subtitle>
        <track>Identity and Access Management</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Samba AD is a free software implementation of Microsoft's Active Directory solution. It took more than five years to port Samba AD to MIT Kerberos and now it is a part of Fedora 27 release. However, the work does not stop here. Active Directory is a complex set of technologies and one of driving factors behind Fedora Server work is to make them easier to deploy and manage. The talk will go into details what is needed to be done to make Fedora a preferred distribution to deploy Samba AD.&lt;/p&gt;</abstract>
        <description></description>
        <persons>
          <person id="1540">Andreas Schneider</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6617.php">Submit feedback</link>
        </links>
      </event>
      <event id="6531">
        <start>15:30</start>
        <duration>00:35</duration>
        <room>UD2.119</room>
        <slug>samba_authentication_authorization</slug>
        <title>Samba authentication and authorization</title>
        <subtitle>Introduction to Active Directory Auth protocols and winbind as an AD member</subtitle>
        <track>Identity and Access Management</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Active Directory is Microsoft's implementation of the LDAP, DNS and Kerberos protocols. It is highly popular in corporate environments. Samba as an SMB server needs to integrate into AD to participate in the Active Directory Authentication and Authorization mechanisms. This talk will give an overview of the aspects of Active Directory that Samba utilizes and gives an introduction into winbind, the main component of Samba responsible for AD integration.&lt;/p&gt;</abstract>
        <description></description>
        <persons>
          <person id="5001">Volker Lendecke</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6531.php">Submit feedback</link>
        </links>
      </event>
      <event id="6498">
        <start>16:10</start>
        <duration>00:30</duration>
        <room>UD2.119</room>
        <slug>smartcards_postgresql</slug>
        <title>Securely Using Cryptographic Hardware with PostgreSQL</title>
        <subtitle/>
        <track>Identity and Access Management</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;This presentation explains how cryptographic hardware allows the use of private keys while preventing them from being viewed or copied. It focuses primarily on the use of Yubikey cryptographic hardware, in both piv and gpg modes. It explains how to use this hardware with popular software like openssh and Postgres.&lt;/p&gt;</abstract>
        <description></description>
        <persons>
          <person id="3126">Bruce Momjian</person>
        </persons>
        <links>
          <link href="http://momjian.us/main/writings/pgsql/crypto_hw.pdf">Securely Using Cryptographic Hardware</link>
          <link href="https://submission.fosdem.org/feedback/6498.php">Submit feedback</link>
        </links>
      </event>
      <event id="6450">
        <start>16:45</start>
        <duration>00:30</duration>
        <room>UD2.119</room>
        <slug>smartcards_in_linux</slug>
        <title>Smart Cards in Linux and why you should care</title>
        <subtitle>Do you want to know how Smart Cards can help you improve security and work efficiently?</subtitle>
        <track>Identity and Access Management</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Do you want to know how Smart Cards can help you improve security and work efficiently?
Smart cards are among us for decades, but they are still not widely used on daily basis by most of us, even though they provide significant advantages for both security and usability and all the tools are open source in Linux. Smart cards are no longer only credit-card sized cards, but also more practical USB dongles which are frequently combined with other features such as OTP or U2F, which can take this even further.
I will go through architecture of smart cards and show you how they can be used to simplify your work.&lt;/p&gt;</abstract>
        <description>&lt;ul&gt;
&lt;li&gt;Anatomy of Smart Card and software using it

&lt;ul&gt;
&lt;li&gt;project OpenSC&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;li&gt;Practical examples

&lt;ul&gt;
&lt;li&gt;Atomic operations with OpenSC tools&lt;/li&gt;
&lt;li&gt;Using smart cards with high-level tools such as OpenSSH, Firefox&lt;/li&gt;
&lt;li&gt;Debugging Smart Cards problems&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;/ul&gt;
</description>
        <persons>
          <person id="4945">Jakub Jelen</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6450.php">Submit feedback</link>
        </links>
      </event>
      <event id="6652">
        <start>17:20</start>
        <duration>00:30</duration>
        <room>UD2.119</room>
        <slug>idm_sssd</slug>
        <title>SSSD: From an LDAP client to the System Security Services Daemon</title>
        <subtitle/>
        <track>Identity and Access Management</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;SSSD is known in the OSS world as a client towards different LDAP-like databases. However, recently, we have started taking SSSD beyond its bread and butter LDAP client role to provide services that are usable in a broader context, as an application gateway or to a local machine. As a result, you might soon see SSSD enabled and running in your favourite distribution by default or quietly running on the background of another service.&lt;/p&gt;

&lt;p&gt;In the talk I will demonstrate what enhancements we already did in SSSD, such as how to use SSSD as a gateway between an application and a user database or why should you let SSSD manage your Kerberos credential caches .&lt;/p&gt;

&lt;p&gt;I'll also illustrate things we are working on for the future such how to add and access extra attributes of your local users or why it makes sense to let SSSD handle smart card logins even for local users.&lt;/p&gt;

&lt;p&gt;The talk will be useful to system administrators, mainly those who deal with user account management, but also to developers who work on services that integrate with user databases.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;The talk will deal with topics including:
 - why we enabled SSSD in Fedora and in RHEL on all systems by default, even those that have no connection with a remote user database
 - why are we moving features like smart card management or even Kerberos cache management to SSSD
 - what are the interfaces that SSSD exports towards the system, both on the operating system level and the programming level
 - how can you use SSSD to fetch data from a remote data store to your application&lt;/p&gt;</description>
        <persons>
          <person id="1539">Jakub Hrozek</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6652.php">Submit feedback</link>
        </links>
      </event>
      <event id="6141">
        <start>17:55</start>
        <duration>00:30</duration>
        <room>UD2.119</room>
        <slug>session_recording</slug>
        <title>User Session Recording in Cockpit</title>
        <subtitle>Introducing User Session Recording support in Cockpit - a server management Web UI</subtitle>
        <track>Identity and Access Management</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Have you ever wished you could see how exactly a user broke your server? Have you wished to see how the user stumbled upon the problem they just reported? Would you like to have such a power within your easy reach, right in your browser, without the need for a pesky command-line setup? Wish no more, because we're going to handle that with User Session Recording support in Cockpit!&lt;/p&gt;</abstract>
        <description>&lt;p&gt;As part of our User Session Recording project, Red Hat Common Logging team is working with developers of Cockpit, a server management Web UI, to implement support for configuring recording, searching, correlation, and playback of users' terminal sessions, all in your browser! On this session we are going to introduce the new effort, show what's working already, present further plans for development, answer your questions, and eagerly listen to any feedback you might have!&lt;/p&gt;

&lt;p&gt;The Red Hat's User Session Recording project is aiming at building an enterprise-ready solution for centralized recording of user sessions, for audit, forensics and compliance purposes. The solution involves integration with Linux audit logging system, FreeIPA identity management, Elasticsearch storage, and integration into UIs of various management solutions, such as OpenShift, CloudForms, etc. As part of developing our playback and correlation UI component, we're implementing Session Recording support in Cockpit.&lt;/p&gt;

&lt;p&gt;Cockpit is a feature-rich server management Web UI with a new twist: it doesn't take over your system and doesn't force you to relinquish direct control over your system. Instead it lets you jump freely between the command line and the browser at any time you want. You can immediately see the changes you did on the command line in your browser and vice versa. That facilitates gradual learning and simplifies complicated tasks. Cockpit supports a variety of Linux distributions and releases, does its own releases very frequently, and achieves that via advanced and comprehensive continuous integration system, which is a wonder on its own.&lt;/p&gt;</description>
        <persons>
          <person id="3164">Nikolai Kondrashov</person>
        </persons>
        <links>
          <link href="http://scribery.github.io/">User Session Recording Project</link>
          <link href="http://cockpit-project.org/">Cockpit Project</link>
          <link href="https://submission.fosdem.org/feedback/6141.php">Submit feedback</link>
        </links>
      </event>
      <event id="6389">
        <start>18:30</start>
        <duration>00:30</duration>
        <room>UD2.119</room>
        <slug>fleetcommander</slug>
        <title>Fleet Commander: The efficient way of managing the Desktop profiles of your fleet!</title>
        <subtitle>A brief description of the project and its internals!</subtitle>
        <track>Identity and Access Management</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;This talk will go through what Fleet Commander is (and, consequently, what Fleet Commander is &lt;em&gt;not&lt;/em&gt; intended for), which are the solutions proposed by the project, how Fleet Commander interacts with SSSD and freeIPA and, plans for the future and finally provide a Demo of the current state of the project.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;The talk will be divided basically in 4 parts:&lt;/p&gt;

&lt;p&gt;1) Describing what Fleet Commander is (and what it's not intended for):
Fleet Commander is an integrated solution for large Linux desktop deployments that provides a configuration management interface that is controlled centrally and that covers desktop, applications and network configuration. Last but not least, Neither Ansible nor Puppet could solve the core problems of Desktop Session Configuration Management, which is what drove the Fleet Commander development.&lt;/p&gt;

&lt;p&gt;2) Describing Fleet Commander interaction with freeIPA and SSSD:
Fleet Commander relies on freeIPA, which provides a standalone plugin for desktop profile management, to store the profile data and its assignments to users, groups and hosts from the administrator point-of-view. From the client point-of-view, Fleet Commander relies on SSSD to fetch the the profile data at users' login time and notify Fleet Commander whenever new profiles have to be applied.&lt;/p&gt;

&lt;p&gt;3) A short Demo about the current status of the project:
This will be the first time that Fleet Commander project will be Demo'ed after the freeIPA/SSSD integration.&lt;/p&gt;

&lt;p&gt;4) Plans for the future:
A quick discussion about what are the plans for the future, including a way to manage profile data in case of direct integration between Linux clients and Active Directory servers (GPO is the key here!)&lt;/p&gt;</description>
        <persons>
          <person id="4700">Fabiano Fidêncio</person>
          <person id="5299">Oliver Gutiérrez</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6389.php">Submit feedback</link>
        </links>
      </event>
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
      <event id="6784">
        <start>13:30</start>
        <duration>00:30</duration>
        <room>H.1301 (Cornil)</room>
        <slug>securedroppresentation</slug>
        <title>[PR] Anonymous Whistleblowing with SecureDrop</title>
        <subtitle/>
        <track>Decentralised Internet and Privacy</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;This session will introduce SecureDrop, a free and open source whistleblowing platform. We will describe how it addresses the critical need for a way for journalists and sources to communicate securely and anonymously. Many large news organizations including the Associated Press (AP), the Guardian, the Washington Post and the New York Times are all now running SecureDrop in their newsrooms to preserve an anonymous tip line in the presence of increasing surveillance powers by governments and corporations. We will describe how SecureDrop works, how you can install it, and how you can contribute to the project.&lt;/p&gt;</abstract>
        <description>&lt;ul&gt;
&lt;li&gt;&lt;p&gt;Motivation and history of the project&lt;/p&gt;&lt;/li&gt;
&lt;li&gt;&lt;p&gt;Walkthrough of the current workflow from the perspective of sources and journalists&lt;/p&gt;&lt;/li&gt;
&lt;li&gt;&lt;p&gt;Overview of the current decentralized deployment strategy&lt;/p&gt;&lt;/li&gt;
&lt;li&gt;&lt;p&gt;Deployment/installation considerations for news organizations&lt;/p&gt;&lt;/li&gt;
&lt;li&gt;&lt;p&gt;Architecture overview: how SecureDrop uses Tor onion services everywhere to protect the anonymity of users&lt;/p&gt;&lt;/li&gt;
&lt;li&gt;&lt;p&gt;Leveraging Qubes for VM-based isolation in the journalist workflow to compartmentalize sources and submissions&lt;/p&gt;&lt;/li&gt;
&lt;/ul&gt;


&lt;p&gt;Talk will be 20 minutes with 10 minutes questions&lt;/p&gt;</description>
        <persons>
          <person id="5126">redshiftzero</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6784.php">Submit feedback</link>
        </links>
      </event>
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
      <event id="6087">
        <start>09:00</start>
        <duration>00:25</duration>
        <room>H.2214</room>
        <slug>rust_introduction</slug>
        <title>Why you should take a look at Rust?</title>
        <subtitle/>
        <track>Rust</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Today, many new programming languages have been created in order to simplify at the extreme the art of programming (Golang), to boost the performance of their human readable application (Nim), to securize the way to make and run programs with zero-cost abstraction (Rust), or just to propose a new exiting way to write programs (Scala, Swift), etc.
Each of those new programming languages has its own features, goals, attendance, and community.&lt;/p&gt;

&lt;p&gt;Today, it may become hazardous to develop with a new programming language, especially for a company or for a full-time personal project, due to the lack of stability, libraries, IDE features for this programming language, a too small or strict community, or many other obvious reasons.&lt;/p&gt;

&lt;p&gt;In this presentation, I will explain why you should take a look at Rust, using a zero-guarantee "No Troll", especially for your next big projects.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;This talk has been made in both LilleRust and LilleFP meetups, in France.
The goal of this presentation is to introduce the concepts of Rust, its pros and cons, and how Rust differs from the others programming languages.
The target audience is mainly for developers who are reluctant to launch themselves into Rust, or project managers and CTOs who are looking for stable and exciting new technologies.&lt;/p&gt;

&lt;p&gt;This talk is not technical, is intended to inspire the desire to (re)emphasize Rust, and will explain clearly and precisely why Rust is on the way to being the programming language of the next ten years&lt;/p&gt;</description>
        <persons>
          <person id="4603">Antonin Carette</person>
        </persons>
        <links>
          <link href="https://www.youtube.com/watch?v=4zVC2goUcaY">The Youtube retransmission when I made this talk (French language) at the LilleFP meetup, last year</link>
          <link href="https://carette.xyz/lillefp_rust_2302.pdf">Last meetup slides - I need to update them for the next one</link>
          <link href="https://submission.fosdem.org/feedback/6087.php">Submit feedback</link>
        </links>
      </event>
      <event id="6504">
        <start>09:30</start>
        <duration>00:25</duration>
        <room>H.2214</room>
        <slug>rust_idiomatic</slug>
        <title>Idiomatic Rust</title>
        <subtitle/>
        <track>Rust</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Rust is a big language and it gets bigger every day. Many beginners ask: "What is idiomatic Rust?".
I want to show you simple tips which make your Rust code more elegant and concise and introduce you to my peer-reviewed collection of articles/talks/repos for writing idiomatic Rust code.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;Coming from dynamic languages like Python, JavaScript or Ruby, many Rust beginners are missing some guidelines on how to write elegant and concise rustlang. For this purpose, I started a project called "Idiomatic Rust", which is a peer-reviewed collection of articles/talks/repos which teach the essence of good Rust.&lt;/p&gt;

&lt;p&gt;In this talk I will introduce the project and show you some quick tips on how to make your Rust code more idiomatic. I will cover error handling (e.g. Option to Result conversions, the failure crate), efficiently working with (built-in) traits, smart pointers (Borrow, Box, Rc), and some more.&lt;/p&gt;</description>
        <persons>
          <person id="4979">Matthias Endler</person>
        </persons>
        <links>
          <link href="http://matthias-endler.de/2017/boxes-and-trees/">Example content - Smart Pointers in Rust</link>
          <link href="https://github.com/mre/idiomatic-rust">Idiomatic Rust Project</link>
          <link href="https://submission.fosdem.org/feedback/6504.php">Submit feedback</link>
        </links>
      </event>
      <event id="6126">
        <start>10:00</start>
        <duration>00:25</duration>
        <room>H.2214</room>
        <slug>rust_memory_management_intro</slug>
        <title>Rust memory management</title>
        <subtitle>A short intro</subtitle>
        <track>Rust</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;A quick introduction to the unique memory management concepts of Rust.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;Rust is a systems programming language that focuses on safety and performance at the same time. Most people new to Rust, often struggle with memory management. The goal of this talk is to give a very quick overview of Rust's memory management.&lt;/p&gt;</description>
        <persons>
          <person id="1469">Zeeshan Ali</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6126.php">Submit feedback</link>
        </links>
      </event>
      <event id="6422">
        <start>10:35</start>
        <duration>00:20</duration>
        <room>H.2214</room>
        <slug>rust_gtk_rs</slug>
        <title>Introducing gtk-rs</title>
        <subtitle>Making the unsafe safe</subtitle>
        <track>Rust</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Here's how I see the talk:&lt;/p&gt;

&lt;ul&gt;
&lt;li&gt;Presentation of gtk-rs (before it was even an organization)

&lt;ul&gt;
&lt;li&gt;Beginning: rust &amp;lt;-&gt; C direct binding, no indirection, almost no safety&lt;/li&gt;
&lt;li&gt;Generation of signals through (old) macro system&lt;/li&gt;
&lt;li&gt;Old closures system to allow callbacks&lt;/li&gt;
&lt;li&gt;Short (old) code demonstration&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;li&gt;Creation of gtk-rs

&lt;ul&gt;
&lt;li&gt;multi-repository&lt;/li&gt;
&lt;li&gt;easier to maintain, more difficult to release&lt;/li&gt;
&lt;li&gt;licensing issues: keeping docs in their own repository and write a tool to put it back&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;li&gt;New gtk-rs era: automatic generation

&lt;ul&gt;
&lt;li&gt;GIR crate&lt;/li&gt;
&lt;li&gt;Parsing gir files and automatically generate as much as possible&lt;/li&gt;
&lt;li&gt;Presentation of the crate, how it works and the hierarchy&lt;/li&gt;
&lt;li&gt;A lot of things are simplified: doc generation, website, releases&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;li&gt;gtk-rs growth

&lt;ul&gt;
&lt;li&gt;more members&lt;/li&gt;
&lt;li&gt;(semi) automatic release process&lt;/li&gt;
&lt;li&gt;a lot more of bindings (sourceview, pangocairo, webkit...)&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;li&gt;gtk-rs environment

&lt;ul&gt;
&lt;li&gt;a few projects (process viewer, EDI, tools...)&lt;/li&gt;
&lt;li&gt;relm crate to easily write GTK UIs&lt;/li&gt;
&lt;li&gt;GNOME-class&lt;/li&gt;
&lt;li&gt;gstreamer-rs&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;li&gt;Future of gtk-rs

&lt;ul&gt;
&lt;li&gt;async&lt;/li&gt;
&lt;li&gt;tutorials&lt;/li&gt;
&lt;li&gt;more projects&lt;/li&gt;
&lt;li&gt;more rust in GNOME libraries (librsvg already started this port)&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;/ul&gt;
</abstract>
        <description>&lt;p&gt;The point of this talk is an introduction to the gtk bindings in Rust through the gtk-rs organization. It'll be mainly about how we made it and how we keep making it better.&lt;/p&gt;</description>
        <persons>
          <person id="4927">Guillaume Gomez</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6422.php">Submit feedback</link>
        </links>
      </event>
      <event id="6147">
        <start>11:00</start>
        <duration>00:25</duration>
        <room>H.2214</room>
        <slug>rust_gstreamer</slug>
        <title>GStreamer &amp; Rust</title>
        <subtitle>Fast, safe and productive multimedia software</subtitle>
        <track>Rust</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;GStreamer is a highly versatile, cross-platform, plugin-based multimedia
framework that caters to the whole range of multimedia needs. It can be used
basically everywhere, from embedded devices like phones, TVs or drones to
desktop applications or on huge server farms.&lt;/p&gt;

&lt;p&gt;This talk will focus on how and why Rust looks like the perfect programming
language for evolving GStreamer and provide a safer but still performant and
even more productive development environment than C.
Both GStreamer application development in Rust, and GStreamer plugin
development will be covered. What is possible today already, for which
applications can Rust be perfectly used already and which parts are still
missing? How does it feel like to write an application in Rust compared to
doing it in C? And how and why would one write GStreamer plugins in Rust to
extend the framework and all applications with support for new codecs, filters
or anything else?&lt;/p&gt;

&lt;p&gt;Afterwards there will be a short outlook into the future of Rust in the
GStreamer project itself and for GStreamer application and plugin development.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;Speaker Bio:&lt;/p&gt;

&lt;p&gt;Sebastian Dröge is a Free Software developer and one of the GStreamer
maintainers and core developers. He has been involved with the project since
more than 10 years now. He also contributes to various other Free Software
projects, like Debian, Rust, GNOME and WebKit. While finishing his master's degree
in computer sciences at the University of Paderborn in Germany, he started
working as a contractor for GStreamer and related technologies. Sebastian is
one of the founders of Centricular, a company providing consultancy services,
where he's working from his new home in Greece on improving GStreamer and the
Free Software ecosystem in general.&lt;/p&gt;

&lt;p&gt;Apart from multimedia related topics, Sebastian has an interest in digital
signal processing, programming languages, machine learning, network protocols
and distributed systems.&lt;/p&gt;

&lt;p&gt;Slides for the talk will be provided as PDF once they're finished :)&lt;/p&gt;

&lt;p&gt;Previous talks:&lt;/p&gt;

&lt;p&gt;GStreamer Conference 2017: Oxidising GStreamer, https://gstreamer.freedesktop.org/conference/2017/talks-and-speakers.html#rust
RustFest Kyiv 2017: GStreamer &amp;amp; Rust - A perfect match, http://2017.rustfest.eu/talks/#gstreamer-rust-a-perfect-match
FOSDEM 2017: https://archive.fosdem.org/2017/schedule/event/om_gstreamer/
... and more in the previous years. Let me know if you need further information.&lt;/p&gt;</description>
        <persons>
          <person id="2102">Sebastian Dröge (slomo)</person>
        </persons>
        <links>
          <link href="https://gstreamer.freedesktop.org">GStreamer website</link>
          <link href="https://github.com/sdroege/gstreamer-rs">GStreamer Rust Bindings</link>
          <link href="https://github.com/sdroege/gst-plugin-rs">GStreamer Rust Plugin Writing Infrastructure</link>
          <link href="https://submission.fosdem.org/feedback/6147.php">Submit feedback</link>
        </links>
      </event>
      <event id="6632">
        <start>11:30</start>
        <duration>00:25</duration>
        <room>H.2214</room>
        <slug>rust_vulkan_gfx_rs</slug>
        <title>Portable graphics abstraction in Rust</title>
        <subtitle>Bringing Vulkan everywhere with gfx-rs</subtitle>
        <track>Rust</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Graphics abstraction is an important part of maturing Rust ecosystem. gfx-rs has been the basis of many graphics applications since 2013, but as of this year it undergoes a total rewrite with the new vision, set of goals, and talented contributors. In this talk, I want to explain what this means to existing users, Mozilla, and the world.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;Rough schedule of the talk:
5 mins: overview of Rust graphics libraries used in the wild, including gfx-rs 0.16
10 mins: explaining the nature of gfx-hal, it's architecture and the current state
5 mins: case studies of Rust features used in the new gfx-rs
10 mins: connections to
  - Vulkan Portability Initiative, prototype, issues with C bindings
  - WebGPU W3C Initiative, prototype
  - future of Firefox
10 mins: slush, demos, questions&lt;/p&gt;</description>
        <persons>
          <person id="5057">Dzmitry Malyshau</person>
        </persons>
        <links>
          <link href="https://github.com/gfx-rs/gfx">Project code</link>
          <link href="https://gfx-rs.github.io">Project blog</link>
          <link href="https://air.mozilla.org/toronto-rust-meetup-october-2014/">First talk about gfx-rs (in 2014)</link>
          <link href="https://air.mozilla.org/rust-toronto-meetup-2017-04-11/">Talk about specs ECS</link>
          <link href="https://air.mozilla.org/game-developement-in-rust/">Talk about three-rs</link>
          <link href="https://users.rust-lang.org/t/its-gfx-rs-all-the-way-down/13339">October 2017 status report</link>
          <link href="https://submission.fosdem.org/feedback/6632.php">Submit feedback</link>
        </links>
      </event>
      <event id="6688">
        <start>12:00</start>
        <duration>00:25</duration>
        <room>H.2214</room>
        <slug>rusty_robots</slug>
        <title>Rusty robots</title>
        <subtitle>Programming a self-balancing robot in Rust</subtitle>
        <track>Rust</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Are we embedded yet? I'd say yes! In this talk I'll show you how I programmed a self-balancing robot from scratch. I'll cover IO abstractions, motion sensors, motor drivers, filters, control stuff, bare metal multitasking, logging, etc. And I'll explain how some of Rust features made development easier and made the program more correct.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;The talk will cover the following topics (as time allows):&lt;/p&gt;

&lt;ul&gt;
&lt;li&gt;&lt;p&gt;Dynamics of the inverted pendulum&lt;/p&gt;&lt;/li&gt;
&lt;li&gt;&lt;p&gt;Motion sensors&lt;/p&gt;

&lt;ul&gt;
&lt;li&gt;Accelerometer&lt;/li&gt;
&lt;li&gt;Gyroscope&lt;/li&gt;
&lt;li&gt;Sensor fusion: computing the tilt angle from the sensor readings&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;li&gt;&lt;p&gt;Motors&lt;/p&gt;

&lt;ul&gt;
&lt;li&gt;Dynamics&lt;/li&gt;
&lt;li&gt;H bridge: controlling direction&lt;/li&gt;
&lt;li&gt;Pulse Width Modulation (PWM): controlling speed&lt;/li&gt;
&lt;li&gt;Rotary encoder: sensing speed&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;li&gt;&lt;p&gt;Controller architecture&lt;/p&gt;&lt;/li&gt;
&lt;li&gt;&lt;p&gt;Implementation&lt;/p&gt;

&lt;ul&gt;
&lt;li&gt;Sensor interfaces&lt;/li&gt;
&lt;li&gt;IO abstractions &amp;amp; pin distribution&lt;/li&gt;
&lt;li&gt;Fixed Point Arithmetic&lt;/li&gt;
&lt;li&gt;Sensor noise&lt;/li&gt;
&lt;li&gt;Filter design&lt;/li&gt;
&lt;li&gt;Sensor calibration&lt;/li&gt;
&lt;li&gt;System characterization&lt;/li&gt;
&lt;li&gt;Tasks&lt;/li&gt;
&lt;li&gt;Multitasking&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;li&gt;&lt;p&gt;Logging&lt;/p&gt;

&lt;ul&gt;
&lt;li&gt;Communication over bluetooth&lt;/li&gt;
&lt;li&gt;Binary (de)serialization&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;li&gt;&lt;p&gt;Performance evaluation&lt;/p&gt;

&lt;ul&gt;
&lt;li&gt;CPU usage&lt;/li&gt;
&lt;li&gt;Response times&lt;/li&gt;
&lt;li&gt;Program size&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;/ul&gt;


&lt;p&gt;I should note that I won't go in too much detail about the control engineering topics; just enough to motivate the design of the program.&lt;/p&gt;

&lt;p&gt;The main takeaways of the talk will be:&lt;/p&gt;

&lt;ul&gt;
&lt;li&gt;&lt;p&gt;Rust's rich type system lets you validate parts of your program, like the system initialization, at compile time eliminating a whole class of logic bugs.&lt;/p&gt;&lt;/li&gt;
&lt;li&gt;&lt;p&gt;Zero cost abstractions give you the high performance required to target microcontrollers with just a few KBs of RAM and that operate at tens of MHz.&lt;/p&gt;&lt;/li&gt;
&lt;li&gt;&lt;p&gt;Memory safety enables fearless multitasking, even on a system without an OS.&lt;/p&gt;&lt;/li&gt;
&lt;/ul&gt;
</description>
        <persons>
          <person id="5059">Jorge Aparicio Rivera</person>
        </persons>
        <links>
          <link href="http://blog.japaric.io/">"Embedded in Rust", personal blog</link>
          <link href="https://mobile.twitter.com/japaricious/status/845697935572656128">Old footage of the robot</link>
          <link href="https://submission.fosdem.org/feedback/6688.php">Submit feedback</link>
        </links>
      </event>
      <event id="6103">
        <start>12:30</start>
        <duration>00:25</duration>
        <room>H.2214</room>
        <slug>rust_distributed_kv_store</slug>
        <title>TiKV: using Rust to build a distributed key-value store</title>
        <subtitle/>
        <track>Rust</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;It’s not an easy thing to build a modern Key-Value database which supports the distributed transaction, horizontal scalability, etc. But this is exactly what we are doing and we have built such a database from scratch using Rust. The database is named TiKV. In this talk, I will share how we use Rust to build the storage, to support replication across geographically distributed data networks, to implement an RPC framework, to inject failure for tests, and to monitor the key metrics of the whole cluster.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;To build a distributed Key-Value store from scratch, we need to consider many things. In this talk, I will share with you the following experiences when we build TiKV.&lt;/p&gt;

&lt;ol&gt;
&lt;li&gt;Why another database? The key features of a modern distributed Key-Value store: horizontal scalability, auto failover, transactional API, etc.&lt;/li&gt;
&lt;li&gt;How we build the TiKV core system, incluing the backend storage engine, the RPC framework, the consensus replication mechanism, etc.&lt;/li&gt;
&lt;li&gt;How we use the failure injection test to guarantee data safety.&lt;/li&gt;
&lt;li&gt;How we monitor the cluster and diagnose the problems.&lt;/li&gt;
&lt;li&gt;The future plan.&lt;/li&gt;
&lt;/ol&gt;
</description>
        <persons>
          <person id="4711">Siddon Tang</person>
        </persons>
        <links>
          <link href="https://github.com/pingcap/tikv">TiKV on GitHub</link>
          <link href="https://air.mozilla.org/bay-area-rust-meetup-august-2017/">Futures and gRPC in Rust</link>
          <link href="https://submission.fosdem.org/feedback/6103.php">Submit feedback</link>
        </links>
      </event>
      <event id="6063">
        <start>13:00</start>
        <duration>00:25</duration>
        <room>H.2214</room>
        <slug>rust_python_modules</slug>
        <title>Pumping up Python modules using Rust</title>
        <subtitle>Building python extensions using Rust </subtitle>
        <track>Rust</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;If you’ve spent much time writing (or debugging) Python performance problems, you’ve probably had a hard time managing memory with its limited language support.In this talk we venture deep into the belly of the Rust Language to uncover the secret incantations for building high performance and memory safe Python extensions using Rust.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;Rust has a lot to offer in terms of safety and performance for high-level programming languages such Python, Ruby, Js and more with its easy Foreign Function Interface capabilities which enables developers to easily develop bindings for foreign code.&lt;/p&gt;

&lt;p&gt;Keywords: Python, Rust,  System programming, Language, Rust FFI&lt;/p&gt;

&lt;p&gt;Session Content:&lt;/p&gt;

&lt;ul&gt;
&lt;li&gt;Problems with current python extensions&lt;/li&gt;
&lt;li&gt;Live Demo of building python extensions in Rust&lt;/li&gt;
&lt;li&gt;Advantages of using Rust&lt;/li&gt;
&lt;li&gt;Scope and applications&lt;/li&gt;
&lt;li&gt;Benchmarking performance&lt;/li&gt;
&lt;li&gt;Community Support &amp;amp; crate details&lt;/li&gt;
&lt;/ul&gt;


&lt;p&gt;Key Takeaways:&lt;/p&gt;

&lt;ul&gt;
&lt;li&gt;Learn to build python extension in Rust&lt;/li&gt;
&lt;li&gt;Audience will be able to appreciate the core design behind Rust language which enables it to be super fast and safe&lt;/li&gt;
&lt;li&gt;Get a hands-on programming experience with Rust Lang&lt;/li&gt;
&lt;li&gt;Learn in details about Rust community and tool ecosystem&lt;/li&gt;
&lt;/ul&gt;
</description>
        <persons>
          <person id="4264">dvigneshwer</person>
        </persons>
        <links>
          <link href="http://https://air.mozilla.org/rain-of-rust-3rd-online-meeting/ ">RainOfRust talk</link>
          <link href="https://dvigneshwer.github.io/posts/2016/04/Rust-Python/">Blog link - Rust for pythonist</link>
          <link href="https://submission.fosdem.org/feedback/6063.php">Submit feedback</link>
        </links>
      </event>
      <event id="6549">
        <start>14:30</start>
        <duration>00:25</duration>
        <room>H.2214</room>
        <slug>rust_demystifying_parsing</slug>
        <title>Demystifying Rust parsing</title>
        <subtitle/>
        <track>Rust</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Usually, the topic of parsing the Rust source code is associated with the Rust compiler itself, which for many is an uncharted territory. However, parsing by itself can (and should) be used out of the context of the Rust compiler: given the wealth of information that we can extract out of the code, we can do a lot of thing with it.&lt;/p&gt;

&lt;p&gt;In this talk, we'll discuss several interesting applications for the Rust parser and the abstract syntax trees it produces, with practical examples of Mozilla &lt;em&gt;bindgen&lt;/em&gt; (automatic generation of Rust library bindings based on C source code) and a Java binding generator written by the author for a large-scale open source library.&lt;/p&gt;</abstract>
        <description>&lt;h2&gt;Expected prior knowledge / intended audience&lt;/h2&gt;

&lt;p&gt;Some prior basic knowledge of compilers and parsing is expected.&lt;/p&gt;

&lt;p&gt;The intended audience is Rust developers who want to learn more about the internal implementation of the Rust compiler and to practically apply this knowledge in their projects.&lt;/p&gt;</description>
        <persons>
          <person id="4912">Nikita Baksalyar</person>
        </persons>
        <links>
          <link href="https://github.com/mozilla/moz-cheddar">The C header generator that will be referenced in the talk</link>
          <link href="https://github.com/dtolnay/syn">Alternative Rust parser based on Nom, which doesn't depend on the nightly compiler</link>
          <link href="https://github.com/rust-lang/rust/tree/master/src/libsyntax">Parser internal to the Rust compiler</link>
          <link href="https://submission.fosdem.org/feedback/6549.php">Submit feedback</link>
        </links>
      </event>
      <event id="6085">
        <start>15:30</start>
        <duration>00:25</duration>
        <room>H.2214</room>
        <slug>rust_miri_const_evaluation</slug>
        <title>Reaching const evaluation singularity</title>
        <subtitle>An introduction into miri and its possibilities for Rust's const evaluation</subtitle>
        <track>Rust</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;The Rust interpreter &lt;code&gt;miri&lt;/code&gt; has been merged into rustc to be its new const evaluator. This merge not only fixed various bugs in the old const evaluator, it opened up the avenue for many new features. Ever wanted to do a &lt;code&gt;for&lt;/code&gt; loop in a constant? Want to parse a &lt;code&gt;toml&lt;/code&gt; file into a static &lt;code&gt;Config&lt;/code&gt; struct and report parsing errors as compile-time errors? Well, now you can do all that (pending RFCs for the details). In this talk I will present miri's design, its usage in the compile-time evaluator as well as future features that are enabled by it&lt;/p&gt;</abstract>
        <description></description>
        <persons>
          <person id="4694">Oli</person>
        </persons>
        <links>
          <link href="https://github.com/solson/miri">Repository of miri</link>
          <link href="https://github.com/rust-lang/rust/pull/45002">Initial merge of miri into rustc</link>
          <link href="https://submission.fosdem.org/feedback/6085.php">Submit feedback</link>
        </links>
      </event>
      <event id="6665">
        <start>16:00</start>
        <duration>00:25</duration>
        <room>H.2214</room>
        <slug>rust_embedding_wasm</slug>
        <title>Rust - embedding WebAssembly for scripting</title>
        <subtitle> WebAssembly in non-Javascript environments</subtitle>
        <track>Rust</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Rust is associated with performance, memory safety and control of memory usage.  Embedding dynamic runtimes such as for Lua or Javascript for dynamic scripting within the Rust-App would introduce an huge overhead. A WebAssembly-engine seems to be a good choice as compact and portable runtime environment. JIT-compiler may be used in future to transform WASM files to native code.&lt;/p&gt;

&lt;p&gt;The talk will present WebAssembly technology and the benefits and pitfalls integrating it into a Rust-app. Small routines are implemented in C++/Rust and compiled to Wasm. The Rust-App is loading the wasm-code as plugin at runtime to execute dynamic tasks.&lt;/p&gt;</abstract>
        <description></description>
        <persons>
          <person id="5072">Frank Rehberger</person>
        </persons>
        <links>
          <link href="https://github.com/paritytech/parity-wasm">I contributed integration tests to this project, that I can use as demonstrators for this talk</link>
          <link href="https://submission.fosdem.org/feedback/6665.php">Submit feedback</link>
        </links>
      </event>
      <event id="6124">
        <start>16:30</start>
        <duration>00:25</duration>
        <room>H.2214</room>
        <slug>rust_testing_mocking</slug>
        <title>Testing in Rust</title>
        <subtitle>A Primer in Testing and Mocking</subtitle>
        <track>Rust</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Rust is designed for building low-level systems processes that are reliable and safe. Nevertheless, it is still important for developers to ensure their code is doing the right thing. To achieve this, Rust has a rich set of built-in testing tools for writing unit tests.&lt;/p&gt;

&lt;p&gt;In this talk we cover general unit testing techniques for Rust. We will also demonstrate how to mock out complex dependencies using the double crate. Examples will range from simple cases to complex cases that you'll often see when testing real world systems.&lt;/p&gt;

&lt;p&gt;The talk is suitable for both novice and experienced Rust developers, as well as non-Rust developers who are interested in learning more about the language.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;Rust is designed for building low-level systems processes that are reliable and safe. Nevertheless, it is still important for developers to ensure their code is doing the right thing. To achieve this, Rust has a rich set of built-in testing tools for writing unit tests.&lt;/p&gt;

&lt;p&gt;When writing unit tests, we often need to mock dependencies that are complex to set up or access external resources (e.g. databases and APIs). Rust's ownership semantics make dependency mocking non-trivial. Thankfully, the double crate (https://github.com/DonaldWhyte/double) abstracts the complexities of mocking in Rust away from you.&lt;/p&gt;

&lt;p&gt;In this talk we cover general unit testing techniques for Rust. We will also demonstrate how to mock out dependencies using double. Examples will range from simple cases to complex cases that you'll often see when testing real world systems. By the end of the talk, viewers will be able to:&lt;/p&gt;

&lt;ul&gt;
&lt;li&gt;write test modules and documentation tests&lt;/li&gt;
&lt;li&gt;mock out complex dependencies for simpler / more deterministic unit tests&lt;/li&gt;
&lt;li&gt;perform powerful matching on generated outputs&lt;/li&gt;
&lt;li&gt;generate large amounts of test data for fuzz testing in 2-3 lines of code&lt;/li&gt;
&lt;/ul&gt;


&lt;p&gt;This talk is suitable for both novice and experienced Rust developers, as well as non-Rust developers who are interested in learning more about the language.&lt;/p&gt;</description>
        <persons>
          <person id="4578">Donald Whyte</person>
        </persons>
        <links>
          <link href="https://github.com/DonaldWhyte/double">Mocking framework used for examples in talk</link>
          <link href="https://github.com/carllerche/hamcrest-rust">Argument matching library for test assertions</link>
          <link href="http://donsoft.io/gmock-presentation/">Presentation I've given at other conferences: C++ testing/mocking using Google Mock </link>
          <link href="http://">http://</link>
          <link href="https://submission.fosdem.org/feedback/6124.php">Submit feedback</link>
        </links>
      </event>
    </room>
    <room name="H.3227">
    </room>
    <room name="H.3228">
    </room>
    <room name="AW1.120">
    </room>
    <room name="AW1.121">
      <event id="6774">
        <start>14:05</start>
        <duration>00:30</duration>
        <room>AW1.121</room>
        <slug>developing_software_on_oric_microcomputers</slug>
        <title>Developing software on ORIC microcomputers</title>
        <subtitle>OSDK, Oricutron &amp; friends</subtitle>
        <track>Retrocomputing</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;The ORIC SDK by Defence Force is used to write demos and games for the ORIC range of microcomputers. Along with the Oricutron emulator, they make it possible to cross-develop C and asm programs for these machines.
We'll show you how.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;We'll show installation and usage of the OSDK.&lt;/p&gt;</description>
        <persons>
          <person id="3587">François Revol</person>
        </persons>
        <links>
          <link href="http://osdk.defence-force.org/">OSDK homepage</link>
          <link href="http://miniserve.defence-force.org/">Defence Force SVN repository</link>
          <link href="https://www.oric.org/">ORIC reference site</link>
          <link href="https://submission.fosdem.org/feedback/6774.php">Submit feedback</link>
        </links>
      </event>
      <event id="6328">
        <start>15:15</start>
        <duration>00:30</duration>
        <room>AW1.121</room>
        <slug>netbsd_modern_operating_system_for_retro_battlestation</slug>
        <title>NetBSD - A modern operating system for your retro battlestation</title>
        <subtitle/>
        <track>Retrocomputing</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;The NetBSD operating systems focus on portability means that over the years
since its inception it has ammassed support for a large body of platforms across
many CPU architectures with continued support to this day.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;The NetBSD operating systems focus on portability means that over the years
since its inception it has ammassed support for a large body of platforms across
many CPU architectures with continued support to this day.&lt;/p&gt;

&lt;p&gt;Through this effort to provide extensive support many features &amp;amp; sub projects
have developed to acomodate supported hardware.
Everything from a Sun2 workstation to a Sega Dreamcast to an Amiga and many
others. This talk will cover the details of these features which ease supporting
such systems.&lt;/p&gt;

&lt;p&gt;No system newer than 10 years old will be covered!&lt;/p&gt;

&lt;ul&gt;
&lt;li&gt;Introduction to NetBSD and the benefits of extensive support&lt;/li&gt;
&lt;li&gt;Bootloaders&lt;/li&gt;
&lt;li&gt;Use of Emulation&lt;/li&gt;
&lt;li&gt;Automated testing on Amiga, Sega Dreamcast and beyond with Anita&lt;/li&gt;
&lt;li&gt;Cross compilation support&lt;/li&gt;
&lt;li&gt;Complimentary hardware projects: USB interface for your Turbo Channel VAX and more&lt;/li&gt;
&lt;li&gt;Cutest of devices&lt;/li&gt;
&lt;li&gt;Revival of once deemed dead ISA&lt;/li&gt;
&lt;/ul&gt;
</description>
        <persons>
          <person id="4853">Sevan Janiyan</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6328.php">Submit feedback</link>
        </links>
      </event>
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
      <event id="7199">
        <start>09:30</start>
        <duration>00:20</duration>
        <room>K.4.201</room>
        <slug>osd_welcome</slug>
        <title>Welcome &amp; Chatting</title>
        <subtitle/>
        <track>Open Source Design</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Please feel free to come earlier, before talks start, to meet us!&lt;/p&gt;</abstract>
        <description></description>
        <persons>
          <person id="4216">Victoria Bondarchuk</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/7199.php">Submit feedback</link>
        </links>
      </event>
      <event id="6892">
        <start>10:30</start>
        <duration>00:20</duration>
        <room>K.4.201</room>
        <slug>osd_crash_course_on_remote_usability_testing</slug>
        <title>A crash course on remote usability testing</title>
        <subtitle/>
        <track>Open Source Design</track>
        <type>devroom</type>
        <language/>
        <abstract></abstract>
        <description></description>
        <persons>
          <person id="5171">Sarah O'Donnell</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6892.php">Submit feedback</link>
        </links>
      </event>
      <event id="7030">
        <start>12:00</start>
        <duration>00:20</duration>
        <room>K.4.201</room>
        <slug>osd_our_open_source_design_collective</slug>
        <title>Our Open Source Design collective</title>
        <subtitle>and group photo</subtitle>
        <track>Open Source Design</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;For everyone who doesn’t know what exactly we do, this is a short intro to our collective: We work to raise the profile of good design in open source software, and connect developers &amp;amp; designers to make it happen.&lt;/p&gt;

&lt;p&gt;We run an Open Source Design community forum, organize design tracks at well-known events like FOSDEM (hello ;), FOSSASIA and OpenTechSummit, have a job board to get designers involved, provide open design resources to developers &amp;amp; designers, and more.&lt;/p&gt;

&lt;p&gt;We will also take our GROUP PHOTO during this session! :)&lt;/p&gt;</abstract>
        <description>&lt;p&gt;A few of the news from last year include:&lt;/p&gt;

&lt;ul&gt;
&lt;li&gt;Organization of our first Open Source Design Summit in Berlin! https://opencollective.com/opensourcedesign/events/opensourcedesign-summit&lt;/li&gt;
&lt;li&gt;Another year of organizing the Design/Art/Community track at FOSSASIA: https://2017.fossasia.org/tracks.html#2017-03-19-Design,&lt;em&gt;Art,&lt;/em&gt;Community&lt;/li&gt;
&lt;li&gt;First time organizing an Open Source Design track at OpenTechSummit Berlin-Potsdam: https://2017.opentechsummit.net/programm/tracks.html#2017-05-25-Open&lt;em&gt;Source&lt;/em&gt;Design&lt;/li&gt;
&lt;li&gt;Setting up our community discussion forum: https://discourse.opensourcedesign.net/&lt;/li&gt;
&lt;li&gt;Kicking off new local meetups: https://discourse.opensourcedesign.net/c/meetups – among them a very active one in NYC!&lt;/li&gt;
&lt;li&gt;Attending a bunch of events and giving talks related to Open Source Design https://discourse.opensourcedesign.net/c/events&lt;/li&gt;
&lt;li&gt;Lots more work on the website, like integrating comments into the job board, and adding subsites for resources and projects&lt;/li&gt;
&lt;li&gt;OpenDesign.io joined forces with us! :) https://twitter.com/OpenDesignIO/status/923990916758691841&lt;/li&gt;
&lt;li&gt;Becoming an FSFE associated organization: https://fsfe.org/associates/associates.en.html&lt;/li&gt;
&lt;li&gt;Getting a 1000 $ donation from Discourse https://twitter.com/discourse/status/928591869763883008&lt;/li&gt;
&lt;li&gt;Getting funding from Wikimedia Germany for our Summit and stickers, posters &amp;amp; cards!&lt;/li&gt;
&lt;li&gt;Probably lots more we forgot to list! :)&lt;/li&gt;
&lt;/ul&gt;
</description>
        <persons>
          <person id="401">Jan-Christoph Borchardt</person>
        </persons>
        <links>
          <link href="http://opensourcedesign.net/">Open Source Design</link>
          <link href="http://opensourcedesign.net/jobs">Open Source Design job board</link>
          <link href="http://opensourcedesign.net/events">Open Source Design events</link>
          <link href="https://discourse.opensourcedesign.net/">Our Open Source Design community forum :)</link>
          <link href="https://opencollective.com/opensourcedesign">Funding at Open Collective</link>
          <link href="https://github.com/opensourcedesign">Our Github organization</link>
          <link href="https://submission.fosdem.org/feedback/7030.php">Submit feedback</link>
        </links>
      </event>
      <event id="6897">
        <start>12:30</start>
        <duration>00:20</duration>
        <room>K.4.201</room>
        <slug>osd_improving_gitlabs_navigation_and_design_system</slug>
        <title>Improving GitLab's Navigation and Design System</title>
        <subtitle>How we approached and strengthened our commitment to the revised navigation of GitLab and the GitLab Design System.</subtitle>
        <track>Open Source Design</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;A brief introduction to what GitLab is and what remote working means. How did we improve and ship our revised navigation, plus how are we creating a consistent design language and system.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;In the release 9.4 of GitLab we took a big step toward improving our navigation here at GitLab. We conducted several rounds of exploration and research, plus took an initial opt-in approach when we introduced this new feature. In this talk, we'll go in-depth about why this was necessary and how we came to this conclusion. We'll go over what lessons are learned and how we continue to improve.&lt;/p&gt;

&lt;p&gt;After this, we'll go why it is so important to have a solid design language and system. What is our approach to taking on such a daunting task and how will our future goals benefit from this.&lt;/p&gt;

&lt;p&gt;All of the topics above are told from the perspective of a fully remote design team working with open source software, including a wide community.&lt;/p&gt;</description>
        <persons>
          <person id="5176">Dimitrie Hoekstra</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6897.php">Submit feedback</link>
        </links>
      </event>
      <event id="6961">
        <start>13:30</start>
        <duration>00:20</duration>
        <room>K.4.201</room>
        <slug>osd_ecosystems_of_professional_libre_graphics_use</slug>
        <title>Ecosystems of Professional Libre Graphics Use</title>
        <subtitle/>
        <track>Open Source Design</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Libre Graphics magazine spent five years showing off excellent work done with Free/Libre and Open Source graphics software. We showed off the work of individuals and small studios doing exciting work with F/LOSS tools. While exciting things are happening in the world of F/LOSS design, the perception of F/LOSS graphics tools as somehow less-than or other-than the “industry standard” for graphic designers persists. This presentation looks at problems of F/LOSS adoption, especially for graphic design. It asks the question “What kinds of ecosystems do we need to have to successfully do Libre Graphics (including F/LOSS, Free Cultural licenses, and Open Standards) in professional contexts?”&lt;/p&gt;</abstract>
        <description>&lt;p&gt;Libre Graphics magazine spent five years showing off excellent work done with Free/Libre and Open Source graphics software. Our aim when we started was to challenge the idea that F/LOSS tools weren’t up to the job of doing professional graphic design work, especially in print. We published eight issues of a beautifully-printed, tactile, keepable paper magazine. We showed off the work of individuals and small studios doing exciting work with F/LOSS tools.&lt;/p&gt;

&lt;p&gt;In the two years since we stopped making Libre Graphics magazine, a lot of exciting things have happened in the world of F/LOSS design. But one of the problems that keeps hanging on is the perception of F/LOSS graphics tools as somehow something less-than or other-than the “industry standard” set of tools that graphic designers are meant to use. This presentation looks at problems of F/LOSS adoption, especially for graphic design. It asks the question “What kinds of ecosystems do we need to have to successfully do Libre Graphics (including F/LOSS, Free Cultural licenses, and Open Standards) in professional contexts?”&lt;/p&gt;</description>
        <persons>
          <person id="33">ginger coons</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6961.php">Submit feedback</link>
        </links>
      </event>
      <event id="6853">
        <start>14:00</start>
        <duration>00:25</duration>
        <room>K.4.201</room>
        <slug>osd_icon_themes</slug>
        <title>Icon Themes</title>
        <subtitle>Reusable icon variables and mappings for customizable user interfaces</subtitle>
        <track>Open Source Design</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Software platforms need to be highly extensible and customizable, since developers need to build on top of them and provide the best experience for users. Some users put more focus on the styling and visual aspect of their customization, others need it to be highly accessible or responsive, while others just like to have diversity in their choices.&lt;/p&gt;

&lt;p&gt;Being able to provide multiple icon sets inside a platform is still a difficult task because of the variety of ways icons can be provided: as images, as font sets, as SVG, etc. I will present a solution for creating and using icon themes, also mentioning the limitations and the difficulties we had in implementing such a solution on our platform. Several icon libraries will be compared, showcasing the reasons, decisions and the compatibility and mapping issues we faced during the process.&lt;/p&gt;</abstract>
        <description></description>
        <persons>
          <person id="2779">Ecaterina Moraru</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6853.php">Submit feedback</link>
        </links>
      </event>
      <event id="6276">
        <start>14:30</start>
        <duration>00:20</duration>
        <room>K.4.201</room>
        <slug>osd_interface_animation_from_the_future</slug>
        <title>Interface Animation from the Future</title>
        <subtitle/>
        <track>Open Source Design</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Animation can make interfaces better because it allows interface changes to explained visually, making them easier to grasp. However, it is important to consider the spatial model that is created by animations, and avoid potential contraditions that can make an interface more instead of less confusing. This talk introduces semantic animation, a way of designing interfaces that avoids contraditions by thinking about interfaces as a collection of components rather than a series of screens.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;Animation is the future of interface design. It enables us to make interfaces more understandable by offloading processes from the user’s brain to the screen. However, in many cases animations are simply added as transitions between independently designed screens. This can result in animations contradicting each other spatially. I co-wrote an &lt;a href="https://alistapart.com/article/motion-with-meaning-semantic-animation-in-interface-design"&gt;article&lt;/a&gt; about why this is a problem, and outlined a solution: Designing semantic components which change over time, and then using these to compose interfaces.&lt;/p&gt;

&lt;p&gt;The industry seems to largely agree that this is the way forward, but there are very few interfaces implementing these ideas in a holistic way. I believe the main reason for this is that the current generation of toolkits and layout technologies is built for static layouts with strict hierarchies. This makes it prohibitively difficult to build interfaces where components move fluidly between different states.&lt;/p&gt;

&lt;p&gt;I will talk about some of the challenges designing and implementing semantic animation both in prototypes and real-world applications, and give some general guidance on how you can make your applications more semantic.&lt;/p&gt;</description>
        <persons>
          <person id="4787">Tobias Bernard</person>
        </persons>
        <links>
          <link href="https://alistapart.com/article/motion-with-meaning-semantic-animation-in-interface-design">A List Apart Article on Semantic Animation</link>
          <link href="https://medium.com/@pasql/transitional-interfaces-926eb80d64e3">Transitional Interfaces by Pasquale D’Silva</link>
          <link href="http://">http://</link>
          <link href="https://submission.fosdem.org/feedback/6276.php">Submit feedback</link>
        </links>
      </event>
      <event id="6597">
        <start>15:00</start>
        <duration>00:20</duration>
        <room>K.4.201</room>
        <slug>osd_the_case_against_it_just_works_or_how_to_avoid_idiocracy</slug>
        <title>The case against "It just works" or how to avoid #idiocracy</title>
        <subtitle>Design, education, politics and fake news.</subtitle>
        <track>Open Source Design</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;Design is more than usability testing and click analytics. Design always carried the dominant ideas of the era and championed them, forming cultures along the way. Today's design is immensely influenced by Steve Jobs and his "Just Works" and "Automagically" mantras. While recognizing the significance of the democratization of technology, it was done in a way that for the first time completely hides the way things work from their users. In fact it goes to great lengths to lock users out of their gadgets.&lt;/p&gt;

&lt;p&gt;Open source is about, among other things, freedom to study. In this spirit open source design isn't only about the sources of design documents, it's about facilitating the study of the inner workings: Let's create designs that are easy to use yet teach the user how the system we are designing works. Informed users will be able to better understand why a result is not what they expected, will be able to solve more of the possible problems, and the result is being happier both with the system and with themselves.&lt;/p&gt;</abstract>
        <description>&lt;p&gt;In this presentation, we will study how design was once overtly political, along with a few notable historical design movements, analyze the current state of design, how it came to be and its effects on human intellect, and then propose a new design direction inspired in part by video games where the goal isn't to blindly guide our users to their goal, but teach them how to achieve what they need, using our software as a tool and make feel rewarded with the results of &lt;em&gt;their&lt;/em&gt; efforts, and not the results of an "automagical" piece of software.&lt;/p&gt;</description>
        <persons>
          <person id="2794">Michael Demetriou</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6597.php">Submit feedback</link>
        </links>
      </event>
      <event id="6905">
        <start>16:30</start>
        <duration>00:20</duration>
        <room>K.4.201</room>
        <slug>osd_pitch_your_project</slug>
        <title>Pitch your project</title>
        <subtitle>Present your FOSS project to designers and get them to contribute</subtitle>
        <track>Open Source Design</track>
        <type>devroom</type>
        <language/>
        <abstract>&lt;p&gt;This session has become a bit of a tradition in the Open Source Design devroom. Every year we close by inviting FOSDEM attendees to introduce their projects to the designers in the room, and tell them the type of the design contributions they need.&lt;/p&gt;

&lt;p&gt;I thought we might want to do this again.&lt;/p&gt;</abstract>
        <description></description>
        <persons>
          <person id="1670">Belen Barros Pena</person>
        </persons>
        <links>
          <link href="https://submission.fosdem.org/feedback/6905.php">Submit feedback</link>
        </links>
      </event>
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
