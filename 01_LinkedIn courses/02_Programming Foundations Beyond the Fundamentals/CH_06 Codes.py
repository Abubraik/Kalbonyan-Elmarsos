###################################### CH 6 ######################################
#Opening input file 
infile = open('values.txt', 'rt')
#create and open output file
outfile = open('values-totaled.txt', 'wt')
print('Processing input')
sum = 0
for line in infile:
    sum += int(line)
    print(line.rstrip(), file=outfile)
print('\nTotal: ' + str(sum), file=outfile)
outfile.close()
print('Output complete')
