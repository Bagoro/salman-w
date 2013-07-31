ffmpeg (build Jul 29 2013 18:05:45) used with following commands to convert the movie:

ffmpeg.exe -i big_buck_bunny_trailer-1080p.ogg -c:v libx264 -profile:v baseline -preset slow -b:v 800k -c:a libvo_aacenc -b:a 128k -s 512x288 big_buck_bunny_trailer-288p.mp4
ffmpeg.exe -i big_buck_bunny_trailer-1080p.ogg -c:v libx264 -profile:v baseline -preset slow -b:v 800k -c:a libvo_aacenc -b:a 128k -s 512x288 -movflags faststart big_buck_bunny_trailer-288p-faststart.mp4

The original movie is available at www.bigbuckbunny.org
Copyright 2008, Blender Foundation / www.bigbuckbunny.org
