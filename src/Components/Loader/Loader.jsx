import React, { useEffect, useRef, useState } from "react";
import "./Loader.css";
const Loader = () => {
  const textareaRef = useRef(null);
  const [output, setOutput] = useState([
    "CPU0 microcode updated early to revision 0x1b, date = 2014-05-29",
    "Initializing cgroup subsys cpuset",
    "Initializing cgroup subsys cpu",
    "Initializing cgroup subsys cpuacct",
    "Command line: BOOT_IMAGE=/vmlinuz-3.19.0-21-generic.efi.signed root=UUID=14ac372e-6980-4fe8-b247-fae92d54b0c5 ro quiet splash acpi_enforce_resources=lax intel_pstate=enable rcutree.rcu_idle_gp_delay=1 nouveau.runpm=0 vt.handoff=7",
    "KERNEL supported cpus:",
    "Intel GenuineIntel",
    "AMD AuthenticAMD",
    "Centaur CentaurHauls",
    "e820: BIOS-provided physical RAM map:",
    "BIOS-e820: [mem 0x0000000000000000-0x000000000009dfff] usable",
    "BIOS-e820: [mem 0x000000000009e000-0x000000000009ffff] reserved",
    "BIOS-e820: [mem 0x0000000000100000-0x000000001fffffff] usable",
    "BIOS-e820: [mem 0x0000000020000000-0x00000000201fffff] reserved",
    "BIOS-e820: [mem 0x0000000020200000-0x0000000040003fff] usable",
    "BIOS-e820: [mem 0x0000000040004000-0x0000000040004fff] reserved",
    "BIOS-e820: [mem 0x0000000040005000-0x00000000c9746fff] usable",
    "BIOS-e820: [mem 0x00000000c9747000-0x00000000c9d47fff] ACPI NVS",
    "BIOS-e820: [mem 0x00000000c9d48000-0x00000000c9d4afff] type 20",
    "BIOS-e820: [mem 0x00000000c9d4b000-0x00000000c9d60fff] usable",
    "BIOS-e820: [mem 0x00000000c9d61000-0x00000000c9d66fff] type 20",
    "BIOS-e820: [mem 0x00000000c9d67000-0x00000000c9d68fff] usable",
    "BIOS-e820: [mem 0x00000000c9d69000-0x00000000c9d72fff] type 20",
    "BIOS-e820: [mem 0x00000000c9d73000-0x00000000c9f06fff] usable",
    "BIOS-e820: [mem 0x00000000c9f07000-0x00000000c9f0afff] type 20",
    "BIOS-e820: [mem 0x00000000c9f0b000-0x00000000c9f53fff] usable",
    "BIOS-e820: [mem 0x00000000c9f54000-0x00000000c9f5afff] type 20",
    "BIOS-e820: [mem 0x00000000c9f5b000-0x00000000c9f67fff] reserved",
    "BIOS-e820: [mem 0x00000000c9f68000-0x00000000c9f79fff] type 20",
    "BIOS-e820: [mem 0x00000000c9f7a000-0x00000000c9f7cfff] usable",
    "BIOS-e820: [mem 0x00000000c9f7d000-0x00000000c9f7efff] type 20",
    "BIOS-e820: [mem 0x00000000c9f7f000-0x00000000c9f95fff] usable",
    "Initialising...",
  ]);

  const text = "sh cezmi.sh && apt-get update";
  let i = 0;

  useEffect(() => {
    runner();
  }, []);

  const runner = () => {
    if (i < text.length) {
      // Update the text area with the next character
      textareaRef.current.innerHTML += text.charAt(i);
      i++;
      setTimeout(runner, Math.floor(Math.random() * 220) + 50);
    } else {
      textareaRef.current.innerHTML += "<br>";
      i = 0;
      setTimeout(feedbacker, 1000);
    }
  };

  let count = 0;
  let time = 1;

  const feedbacker = () => {
    textareaRef.current.innerHTML += `[${count / 1000}] ${output[i]}<br>` || "";

    window.scrollTo(0, document.body.scrollHeight);
    i++;
    time = Math.floor(Math.random() * 4) + 1;
    count += time;

    setTimeout(() => {
      if (i < output.length - 2) {
        feedbacker();
      } else {
        textareaRef.current.innerHTML += "<br>Initialising...<br>";
        setTimeout(() => {
          textareaRef.current.style.display = "none";
        }, 500);
      }
    }, time * 10);
  };

  return (
    <div className="load">
      <pre className="term" ref={textareaRef}>
        archxcyler@gmail.com:~${" "}
      </pre>
    </div>
  );
};

export default Loader;
