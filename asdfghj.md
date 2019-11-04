# Linux Stuff TODO:

- Forensics find the picture.
- Add user ace, by clicking on `Windows key`, and then searching up users, then unlock by using admin password and then you are done.
- Just click on Uncomplicated Firewall and enable it. Not really rocket Science
- Allow users to access VIA SSH:
	- From terminal `sudo nano /etc/ssh/sshd_config` 
	- At the end of the file add :
	`Port 1004` 
	`PermitRootLogin no`
	`AllowUsers user1,user2 etc etc`							
	- `CTRL+X` and then `CTRL+O`
	- `sudo ssh reload`
- To change people who can SUDO:
	- `sudo nano /etc/sudoers.d`
	- `CTRL+X` and then `CTRL+O`
- Remove non admin ppl:
	- `sudo nano /etc/group/`
	- There will be a bunch of places where there is an extra person from who should have admin rights just remove his/her name and the comma before.
	- `CTr....` Ya you know what to do
- Keep software Updated:
	- `sudo apt-update`
	- `sudo apt-upgrade`
