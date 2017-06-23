from scapy.all import *
def arp_display(pkt):
    if pkt[ARP].op == 1:
        # if pkt[ARP].psrc == '0.0.0.0':
        if pkt[ARP].hwsrc == '40:b4:cd:23:b7:f2': # Huggies
            print("Pushed ON LivingRoom")
        else:
            print("ARP Probe from: " + pkt[ARP].hwsrc)

print(sniff(prn=arp_display, filter="arp", store=0, count=10))

